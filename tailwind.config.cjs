const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				lg: '4rem',
				xl: '5rem',
				'2xl': '6rem',
			}
		},
		fontFamily: {
			fontFamily: {
				sans: ["Lexend Variable", "Lexend", ...defaultTheme.fontFamily.sans],
			},
		},
		extend: {
		},
	},
	plugins: [
		require('@tailwindcss/typography')
	]
}
