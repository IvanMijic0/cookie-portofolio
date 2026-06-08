import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ mode, isSsrBuild }) => ({
	plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
	build: {
		sourcemap: mode === "development" && !isSsrBuild,
		modulePreload: {
			resolveDependencies(url, deps) {
				return deps.filter(dep => !dep.includes("vendor-lottie") && !dep.includes("proxy"));
			}
		},
		...(!isSsrBuild && {
			rollupOptions: {
				output: {
					experimentalMinChunkSize: 50000,
					manualChunks(id) {
						if (
							id.includes("node_modules/react-pageflip") ||
							id.includes("node_modules/page-flip")
						) {
							return "vendor-pageflip";
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
