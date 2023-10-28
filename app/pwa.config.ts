import type { SvelteKitPWAOptions } from '@vite-pwa/sveltekit';

const config: SvelteKitPWAOptions = {
	registerType: 'autoUpdate',
	strategies: 'generateSW',
	includeAssets: ['favicon.svg', 'apple-touch-icon.png', 'maskable_icon.png'],
	injectManifest: {
		rollupFormat: 'iife',
		globPatterns: ['client/**/*.{js,css,ico,png,svg,webp,woff,woff2}']
	},
	workbox: {
		globPatterns: ['client/**/*.{js,css,ico,png,svg,webp,woff,woff2}']
	},
	devOptions: {
		enabled: true,
		suppressWarnings: true,
		type: 'module',
		navigateFallback: '/'
	},
	manifest: {
		name: 'اسعار الدهب اليوم في مصر',
		id: 'com.andronasef.goldprices',
		short_name: 'سعر الدهب',
		description: 'تطيبق يساعدك في معرفه اخر اسعار سوق الدهب',
		theme_color: '#007aff',
		background_color: '#ffffff',
		lang: 'ar',
		dir: 'rtl',
		start_url: '/',
		scope: '/',
		publicPath: '/',
		display: 'standalone',
		categories: ['finance', 'business', 'utilities'],
		icons: [
			{
				src: 'pwa-192x192.png',
				sizes: '192x192',
				type: 'image/png'
			},
			{
				src: 'pwa-512x512.png',
				sizes: '512x512',
				type: 'image/png'
			},
			{
				src: 'pwa-512x512.png',
				sizes: '512x512',
				type: 'image/png',
				purpose: 'maskable'
			}
		]
	}
};

export default config;
