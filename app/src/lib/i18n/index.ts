import { browser } from '$app/environment';
import { init, register } from 'svelte-i18n';

const defaultLocale = 'ar';

register('ar', () => import('./ar.json'));

init({
	fallbackLocale: defaultLocale,
	initialLocale: browser ? window.navigator.language : defaultLocale
});
