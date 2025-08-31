import express from "express";
import path from "path";
import fs from "fs/promises";
import sharp from "sharp";
import crypto from "crypto";

const app = express();
const ASSETS_DIR = "/assets";
const PORT = process.env.PORT || 4000;

const clamp = (n, min, max) => Math.max(min, Math.min(max, n));
const toInt = (v, def) => {
	const n = parseInt(v, 10);
	return Number.isFinite(n) ? n : def;
};
const toQual = (v, def = 82) => clamp(toInt(v, def), 20, 95);
const toWidth = (v, def) => clamp(toInt(v, def), 16, 3840);
const toFormat = (v, fallback = "webp") => {
	const f = String(v || "").toLowerCase();
	return ["webp", "avif", "jpeg", "png"].includes(f) ? f : fallback;
};

const etag = (buf) => `"${crypto.createHash("sha1").update(buf).digest("hex")}"`;

app.get("/img/*", async (req, res) => {
	try {
		const rel = req.params[0];
		const srcPath = path.join(ASSETS_DIR, rel);

		const src = await fs.readFile(srcPath);

		const w = toWidth(req.query.w, 1600);
		const q = toQual(req.query.q, 82);
		const fmt = toFormat(req.query.format, "webp");

		let pipeline = sharp(src, { limitInputPixels: false }).rotate();
		pipeline = pipeline.resize({ width: w, withoutEnlargement: true });

		if (fmt === "webp") pipeline = pipeline.webp({ quality: q });
		else if (fmt === "avif") pipeline = pipeline.avif({ quality: q });
		else if (fmt === "jpeg") pipeline = pipeline.jpeg({ quality: q, mozjpeg: true });
		else if (fmt === "png") pipeline = pipeline.png();

		const out = await pipeline.toBuffer();

		res.set({
			"Content-Type": `image/${fmt}`,
			"Cache-Control": "public, max-age=31536000, immutable",
			ETag: etag(out),
		});

		if (req.headers["if-none-match"] === etag(out)) {
			res.status(304).end();
			return;
		}

		res.send(out);
	} catch (err) {
		if (err.code === "ENOENT") return res.status(404).send("Not found");
		console.error(err);
		res.status(500).send("Image error");
	}
});

app.listen(PORT, () => {
	console.log(`image-service listening on ${PORT}`);
});
