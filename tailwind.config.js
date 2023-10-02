function withOpacity(variableName) {
	return ({ opacityValue }) => {
		if (opacityValue !== undefined) {
			return `rgba(var(${variableName}), ${opacityValue})`
		}
		return `rgb(var(${variableName}))`
	}
}

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			textColor: {
				skin: {
					primary: withOpacity('--color-primary'),
					a11y: withOpacity('--color-a11y'),
				},
			},
			backgroundColor: {
				skin: {
					primary: withOpacity('--color-primary'),
					a11y: withOpacity('--color-a11y'),
				},
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			fontFamily: {
				sans: ['var(--font-inter)'],
				mono: ['var(--font-roboto-mono)'],
			},
		},
	},
	plugins: [],
}
