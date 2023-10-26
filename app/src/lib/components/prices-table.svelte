<script lang="ts">
	import { Card, Table, TableBody, TableCell, TableHead, TableRow } from 'konsta/svelte';

	import type { GoldPricesType } from '$lib/types/prices';
	import { _ } from 'svelte-i18n';
	export let prices: GoldPricesType;
</script>

<Card class="block overflow-x-auto mt-8" contentWrap={false}>
	<Table class="text-right">
		<TableHead>
			<TableRow header>
				<TableCell header>{$_('pages.homepage.components.prices-table.head-row.unit')}</TableCell>
				<TableCell header>{$_('pages.homepage.components.prices-table.head-row.buy')}</TableCell>
				<TableCell header>{$_('pages.homepage.components.prices-table.head-row.sell')}</TableCell>
			</TableRow>
		</TableHead>
		<TableBody>
			{#each prices as { type, buy, sell }}
				<TableRow>
					<TableCell>{type}</TableCell>
					<TableCell>{buy}</TableCell>
					<TableCell>{sell}</TableCell>
				</TableRow>
			{/each}
		</TableBody>
	</Table>
</Card>
