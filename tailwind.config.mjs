/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage:{
				"background": "url('/public/background.svg')",
			},
			fontFamily:{
				'raleway': ['Raleway','Roboto','sans-serif'],
			},
			keyframes:{
				scroll: {
					'0%': { transform: 'translateX(0%)' },
					'100%': { transform: 'translateX(-50%)' },
				}	
			},
			animation: {
				scroll: 'scroll 40s linear infinite'
			}		
		},
	},
	plugins: [
		function ({ addUtilities }) {
			addUtilities({
				'.mask-fade': {
				maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
				WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
				},
			});
    	},
	],
}
