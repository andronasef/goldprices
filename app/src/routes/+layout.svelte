<script>
	import '../app.css';
	import { App, Navbar, Page } from 'konsta/svelte';
	import { browser } from '$app/environment';

	import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';
	import Nav from '$lib/components/nav.svelte';

	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				enabled: browser
			}
		}
	});
</script>

<App theme="material">
	<Page>
		<Nav />
		<QueryClientProvider client={queryClient}>
			<slot />
		</QueryClientProvider>
	</Page>
</App>
