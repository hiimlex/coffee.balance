import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import { VitePWA, VitePWAOptions } from "vite-plugin-pwa";

export const manifestToPlugin: Partial<VitePWAOptions> = {
	registerType: "prompt",
	includeAssets: [
		"./icons/coffee.svg",
		"./robots.txt",
		"./images/apple-icon-180.png",
	],
	manifest: {
		name: "coffee.balance",
		short_name: "coffee.balance",
		description: "A coffee recipe generator.",
		icons: [
			{
				src: "/images/manifest-icon-192.maskable.png",
				sizes: "192x192",
				type: "image/png",
				purpose: "any",
			},
			{
				src: "/images/manifest-icon-192.maskable.png",
				sizes: "192x192",
				type: "image/png",
				purpose: "maskable",
			},
			{
				src: "/images/manifest-icon-512.maskable.png",
				sizes: "512x512",
				type: "image/png",
				purpose: "any",
			},
			{
				src: "/images/manifest-icon-512.maskable.png",
				sizes: "512x512",
				type: "image/png",
				purpose: "maskable",
			},
		],
		scope: "/coffee.balance",
		background_color: "#A4745C",
		theme_color: "#a396d3",
		display: "standalone",
		orientation: "portrait",
		start_url: "/coffee.balance/",
	},
	devOptions: {
		enabled: true,
	},
};

// https://vitejs.dev/config/
export default defineConfig({
	base: "/coffee.balance",
	plugins: [react(), VitePWA(manifestToPlugin)],
	resolve: {
		alias: {
			"@": resolve(__dirname, "./src"),
		},
	},
});
