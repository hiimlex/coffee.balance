import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import { VitePWA, VitePWAOptions } from "vite-plugin-pwa";

export const manifestToPlugin: Partial<VitePWAOptions> = {
	registerType: "prompt",
	includeAssets: [
		"./public/icons/coffee.svg",
		"./public/robots.txt",
		"apple-icon-180.png",
	],
	manifest: {
		name: "coffee.balance",
		short_name: "coffee.balance",
		description: "A coffee recipe generator.",
		icons: [
			{
				src: "/manifest-icon-192.maskable.png",
				sizes: "192x192",
				type: "image/png",
				purpose: "any",
			},
			{
				src: "/manifest-icon-192.maskable.png",
				sizes: "192x192",
				type: "image/png",
				purpose: "maskable",
			},
			{
				src: "/manifest-icon-512.maskable.png",
				sizes: "512x512",
				type: "image/png",
				purpose: "any",
			},
			{
				src: "/manifest-icon-512.maskable.png",
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
