<script>
	import { Smartphone, Menu } from '@lucide/svelte';
	import links from '../content/links.json';

	let open = $state(false);

	const handleOpenMenu = () => {
		open = !open;
	};
</script>

<nav class="text-text bg-primary max-w-8xl fixed z-30 flex w-full justify-between p-4">
	<div class="hidden gap-6 text-sm md:flex">
		{#each links as link}
			<a href={'#' + link.src} class="hover:text-tertiary hover:cursor-pointer">{link.text}</a>
		{/each}
	</div>
	<div class="flex items-center gap-2">
		<Smartphone class="h-5 w-5" />
		<span class="text-sm">+47 41 39 11 74</span>
	</div>
	<Menu class="md:hidden" onclick={handleOpenMenu} />
</nav>

{#if open}
	<ul
		class="bg-primary text-text fixed inset-0 z-10 flex transform flex-col items-center justify-center space-y-6 transition-all duration-500 ease-in-out"
	>
		{#each links as link}
			<li><a href={'#' + link.src}>{link.text}</a></li>
		{/each}
	</ul>
{/if}
