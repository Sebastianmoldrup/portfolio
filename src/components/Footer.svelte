<script>
	import links from '../content/links.json';
	import { Linkedin, Github } from '@lucide/svelte';
	let year = new Date().getFullYear();
</script>

<footer class="border-muted text-muted-foreground text-text bg-test py-16 pb-12 text-sm">
	<div
		class="container mx-auto flex max-w-4xl flex-col items-start justify-between gap-6 px-4 md:flex-row md:items-center"
	>
		<!-- Left: Name / Rights -->
		<div class="space-y-1">
			<p class="font-medium text-white">Sebastian Møldrup</p>
			<p>© {year}. Alle rettigheter forbeholdt.</p>
		</div>

		<!-- Middle: Navigation -->
		<nav class="text-muted-foreground flex flex-wrap gap-x-6 gap-y-2">
			{#each links as link}
				<a href={'#' + link.src} class="hover:text-tertiary transition">{link.text}</a>
			{/each}
		</nav>

		<!-- Right: social / GitHub -->
		<div class="flex space-x-2 p-4">
			<a href="#linkedin" class="hover:scale-110 hover:cursor-pointer">
				<Linkedin class="h-5 w-5" />
			</a>
			<div class="border-r-2"></div>
			<a href="#github" class="hover:scale-110 hover:cursor-pointer">
				<Github class="h-5 w-5" />
			</a>
		</div>
	</div>
</footer>
