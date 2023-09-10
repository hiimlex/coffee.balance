import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import { VitePWA, VitePWAOptions } from "vite-plugin-pwa";

export const manifestToPlugin: Partial<VitePWAOptions> = {
	registerType: "prompt",
	includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
	manifest: {
		name: "coffee.balance",
		short_name: "coffee.balance",
		description: "A coffee recipe generator.",
		icons: [
			{
				src: "/coffee.balance/android-chrome-192x192.png",
				sizes: "192x192",
				type: "image/png",
			},
			{
				src: "/coffee.balance/android-chrome-512x512.png",
				sizes: "512x512",
				type: "image/png",
			},
			{
				src: "/coffee.balance/apple-touch-icon.png",
				sizes: "180x180",
				type: "image/png",
				purpose: "apple touch icon",
			},
			{
				src: "/coffee.balance/maskable_icon.png",
				sizes: "512x512",
				type: "image/png",
				purpose: "any maskable",
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
