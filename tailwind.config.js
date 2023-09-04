const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	darkMode: 'class',
	theme: {
		colors: {
			background: '#2e2e2e',
			comments: '#797979',
			black: colors.black,
			white: '#d6d6d6',
			yellow: '#e5b567',
			green: '#b4d273',
			orange: '#e87d3e',
			purple: '#9e86c8',
			pink: '#b05279',
			blue: '#6c99bb',
		},
		fontFamily: {
			sans: ['Inter', ...defaultTheme.fontFamily.sans],
		},
	},
	plugins: [],
}
