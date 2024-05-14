import type { Config } from 'tailwindcss';

const config: Config = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		fontFamily: {
			sans: ['Roboto Flex Variable', 'sans-serif'],
			mono: ['Roboto Mono', 'monospace']
		}
	}
};

export default config;
