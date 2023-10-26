<script>
	import goldApiClient from '$lib/apiClient';
	import PricesTable from '$lib/components/prices-table.svelte';
	import Space from '$lib/components/space.svelte';
	import { getCurrentDateTime } from '$lib/utils/date';
	import { createQuery } from '@tanstack/svelte-query';
	import { BlockTitle, Preloader } from 'konsta/svelte';
	import { _ } from 'svelte-i18n';

	const goldPrices = createQuery({
		queryFn: async () => (await goldApiClient.get('eg')).data
	});
</script>

{#if $goldPrices.isPending}
	<Preloader />
{:else}
	<BlockTitle large={true}>{$_('pages.homepage.components.prices-table.title')}</BlockTitle>
	<BlockTitle medium={true}>{getCurrentDateTime()}</BlockTitle>
	<Space size={5} />
	<PricesTable prices={$goldPrices.data} />
{/if}
