import { defineConfig } from 'astro/config'
import tailwind from "@astrojs/tailwind"
import mdx from "@astrojs/mdx"

// const faviconHook = {
// 	name: 'Favicon',
// 	hooks: {
// 		"astro:build:setup": async () => {
// 			await Manifest.create('./src/assets/favicon.png', {
// 				name: 'Template'
// 			})
// 		}
// 	}
// }

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), mdx()],
	compressHTML: true,
	build: {
		assets: 'assets',
		inlineStylesheets: 'auto'
	},
	server: {
		host: true,
		port: 3000
	},
	trailingSlash: 'never',
	vite: {
		server: {
			watch: {
				// support WSL strange things
				usePolling: !!process.env.WSL_DISTRO_NAME
			}
		}
	},
	// Customizable depending on goal
	output: 'static',
	// adapter: node({
	// 	mode: "standalone"
	// }),
	site: 'https://avior.me'
})
