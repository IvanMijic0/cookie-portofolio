import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ mode, isSsrBuild }) => ({
	plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
	build: {
		sourcemap: mode === "development" && !isSsrBuild,
		...(!isSsrBuild && {
			rollupOptions: {
				output: {
					manualChunks(id) {
						if (
							id.includes("node_modules/framer-motion") ||
							id.includes("node_modules/motion")
						) {
							return "vendor-motion";
						}
						if (
							id.includes("node_modules/react-pageflip") ||
							id.includes("node_modules/page-flip")
						) {
							return "vendor-pageflip";
						}
						if (id.includes("node_modules/yet-another-react-lightbox")) {
							return "vendor-lightbox";
						}
						if (id.includes("node_modules/lottie")) {
							return "vendor-lottie";
						}
					},
				},
			},
		}),
	},
}));
