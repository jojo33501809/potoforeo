import react from "@astrojs/react";
import icon from "astro-iconset";
import { defineConfig, fontProviders } from "astro/config";
import { Features } from "lightningcss";

export default defineConfig({
	output: "static",
	image: {
		layout: "constrained",
		responsiveStyles: true,
	},
	vite: {
		css: {
			lightningcss: { exclude: Features.LightDark },
		},
	},
	integrations: [
		react(),
		icon({
			include: {
				ph: [
					"arrow-down-right",
					"arrow-left",
					"arrow-right",
					"arrow-up-right",
					"bell-simple",
					"buildings",
					"chart-bar",
					"chat-circle",
					"check",
					"check-circle",
					"clock",
					"cloud",
					"code",
					"currency-dollar",
					"envelope",
					"file-text",
					"gauge",
					"globe",
					"heart",
					"leaf",
					"lifebuoy",
					"lightning",
					"list",
					"list-bullets",
					"lock",
					"map-pin",
					"pause",
					"phone",
					"play",
					"plug",
					"plus",
					"shield-check",
					"sparkle",
					"squares-four",
					"star",
					"sun",
					"thermometer-simple",
					"trend-up",
					"users-three",
					"x",
				],
			},
		}),
	],
	fonts: [
		{
			provider: fontProviders.google(),
			name: "Inter",
			cssVariable: "--font-body",
			weights: [400, 500, 600, 700],
			fallbacks: ["sans-serif"],
		},
		{
			provider: fontProviders.google(),
			name: "Instrument Serif",
			cssVariable: "--font-display",
			weights: [400],
			styles: ["normal", "italic"],
			fallbacks: ["serif"],
		},
	],
	devToolbar: { enabled: false },
});