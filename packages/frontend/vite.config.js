import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import autoImport from "unplugin-auto-import/vite";
import iconsPlugin from "unplugin-icons/vite";
import iconsResolver from "unplugin-icons/resolver";

export default defineConfig({
	plugins: [
		solidPlugin(),
		autoImport({
			dts: true,
			resolvers: [
				iconsResolver({
					prefix: false,
					extension: "jsx",
					enabledCollections: ["mdi"]
				})
			]
		}),
		iconsPlugin({ compiler: "solid", defaultClass: "_icon" })
	],
	build: {
		target: "es2015",
		minify: "esbuild"
	},
});
