import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import { VitePWA, VitePWAOptions } from "vite-plugin-pwa";

export const manifestToPlugin: Partial<VitePWAOptions> = {
	registerType: "prompt",
	includeAssets: ["favicon.svg", "robots.txt", "apple-touch-icon.png"],
	manifest: {
		name: "coffee.balance",
		short_name: "coffee.balance",
		description: "A coffee recipe generator.",
		icons: [],
		scope: "/coffee.balance",
		background_color: "#A4745C",
		theme_color: "#a396d3",
		display: "standalone",
		orientation: "portrait",
		start_url: "/coffee.balance/",
	},
	scope: "/coffee.balance/",
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
