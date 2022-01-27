const colors = require('tailwindcss/colors');
module.exports = {
	// purge: [],
	// purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
	content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
	darkMode: 'media', // or 'media' or 'class'
	mode: 'jit',
	theme: {
		extend: {
			fontFamily: {
				heading: ['Inter', 'sans-serif'],
				base: ['Roboto', 'sans-serif'],
			},
			colors: {
				//base colors
				'primary-color': {
					DEFAULT: '#2eaae4',
				},
				'positive-color': {
					DEFAULT: '#00b564',
					v2: '#00b564',
					charity: '',
				},
				'negative-color': {
					DEFAULT: '#B50051',
					v2: '#B50051',
					charity: '',
				},
				//text
				'primary-text': { DEFAULT: 'white' },
				// 'secondary-text': '#ACAFBC',
				'secondary-text': { DEFAULT: '#A9A8A8' },
				//bgs
				'primary-bg': { DEFAULT: '#16171F' },
				'secondary-bg': { DEFAULT: '#191C26' },
				'tertiary-bg': { DEFAULT: '#252B3B' },
				'quartiary-bg': { DEFAULT: '#2F364B' },
				//misc
				'primary-border': { DEFAULT: '#252B3B' },
				'secondary-border': { DEFAULT: '#363D54' },
				'tertiary-border': { DEFAULT: '#363D54' },
				'quartiary-border': { DEFAULT: '#363D54' },
			},
			padding: {
				'6.25%': '6.25%',
				'9.375%': '9.375%',
				'12.5%': '12.5%',
				'15%': '15%',
				'18.75%': '18.75%',
				'25%': '25%',
			},
			boxShadow: {
				['primary-color']: '0 0px 25px 0px #45b3e7',
			},
			borderWidth: {
				1: '1px',
				3: '3px',
			},
			height: {
				fit: 'fit-content',
			},
			width: {
				fit: 'fit-content',
				'1/16': '6.25%',
			},
		},
	},
	variants: {
		extend: {},
	},
	//TODO: ADD tailwind-scrollbar, line-clamp
	plugins: [require('tailwind-scrollbar'), require('@tailwindcss/line-clamp')],
};
