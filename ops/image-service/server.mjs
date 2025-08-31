import express from "express";
import morgan from "morgan";
import etag from "etag";
import fs from "node:fs/promises";
import fssync from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import sharp from "sharp";

const app = express();

const ORIGIN_DIR = process.env.ORIGIN_DIR || "/origin";
const CACHE_DIR = process.env.CACHE_DIR || "/cache";
await fs.mkdir(CACHE_DIR, { recursive: true });

const MAX_DIM = 4096;
const DEFAULT_Q = 82;

app.use(morgan("tiny"));

const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

function toInt(v, fallback) {
	const n = parseInt(v, 10);
	return Number.isFinite(n) ? n : fallback;
}

function makeCacheKey(absPath, ops) {
	const key = crypto
		.createHash("sha1")
		.update(absPath + JSON.stringify(ops))
		.digest("hex");

	const ext = ops.format || path.extname(absPath).slice(1) || "webp";
	return path.join(CACHE_DIR, `${key}.${ext}`);
}

app.get("/img/*", async (req, res) => {
	try {
		const rel = req.params[0] || "";
		const safeRel = path.normalize("/" + rel).replace(/^\/+/, "");
		const srcAbs = path.join(ORIGIN_DIR, safeRel);

		const st = await fs.stat(srcAbs).catch(() => null);
		if (!st || !st.isFile()) return res.status(404).send("Not found");

		// parse ops
		const w = clamp(toInt(req.query.w, undefined) || undefined, 1, MAX_DIM);
		const h = clamp(toInt(req.query.h, undefined) || undefined, 1, MAX_DIM);
		const q = clamp(toInt(req.query.q, DEFAULT_Q), 1, 100);
		const fit = ["cover", "contain", "inside", "outside"].includes(req.query.fit)
			? req.query.fit
			: "inside";
		const format = ["webp", "avif", "jpeg", "png"].includes(req.query.format)
			? req.query.format
			: undefined;

		const ops = { w, h, q, fit, format };

		const outPath = makeCacheKey(srcAbs, ops);

		// serve from disk cache if present
		if (fssync.existsSync(outPath)) {
			const buf = await fs.readFile(outPath);
			const tag = etag(buf);
			if (req.headers["if-none-match"] === tag) {
				res.status(304).end();
				return;
			}
			res.set({
				"Cache-Control": "public, max-age=31536000, immutable",
				ETag: tag,
				"Content-Type": mimeFromExt(path.extname(outPath).slice(1))
			});
			return res.end(buf);
		}

		let pipeline = sharp(srcAbs);
		const meta = await pipeline.metadata();

		if (w || h) {
			pipeline = pipeline.resize({
				width: w,
				height: h,
				fit,
				withoutEnlargement: true
			});
		}

		if (format === "avif") pipeline = pipeline.avif({ quality: q });
		else if (format === "webp") pipeline = pipeline.webp({ quality: q });
		else if (format === "jpeg") pipeline = pipeline.jpeg({ quality: q, mozjpeg: true });
		else if (format === "png") pipeline = pipeline.png();

		const buf = await pipeline.toBuffer();

		await fs.writeFile(outPath, buf).catch(() => { });

		const tag = etag(buf);
		res.set({
			"Cache-Control": "public, max-age=31536000, immutable",
			ETag: tag,
			"Content-Type": format
				? mimeFromExt(format)
				: mimeFromExt((meta.format || "webp").toString())
		});
		res.end(buf);
	} catch (e) {
		console.error(e);
		res.status(500).send("Image error");
	}
});

function mimeFromExt(ext) {
	switch (ext) {
		case "avif": return "image/avif";
		case "webp": return "image/webp";
		case "jpg":
		case "jpeg": return "image/jpeg";
		case "png": return "image/png";
		default: return "application/octet-stream";
	}
}

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`Image service on :${PORT} (origin=${ORIGIN_DIR})`);
});
