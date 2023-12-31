/** @type {import('tailwindcss').Config} */

// import konstaConfig config
import konstaConfig from 'konsta/config';

// wrap config with konstaConfig config
export default konstaConfig({
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'media', // or 'class'
	theme: {
		extend: {}
	},
	variants: {
		extend: {}
	},
	plugins: []
});
