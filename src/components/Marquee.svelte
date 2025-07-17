<script lang="ts">
	import { onMount } from 'svelte';
	import Astro from './icons/Astro.svelte';
	import Next from './icons/Next.svelte';
	import Sveltekit from './icons/Sveltekit.svelte';
	import React from './icons/React.svelte';
	import Javascript from './icons/Javascript.svelte';
	import Typescript from './icons/Typescript.svelte';
	import Node from './icons/Node.svelte';
	import Tailwindcss from './icons/Tailwindcss.svelte';
	import Vercel from './icons/Vercel.svelte';
	import Html from './icons/HTML.svelte';
	import Markdown from './icons/Markdown.svelte';
	import Css from './icons/CSS.svelte';
	import Google from './icons/Google.svelte';
	import Github from './icons/Github.svelte';
	import Git from './icons/Git.svelte';

	// Store components in object with key identifies
	const iconComponents = {
		astro: Astro,
		next: Next,
		svelte: Sveltekit,
		react: React,
		javascript: Javascript,
		typescript: Typescript,
		node: Node,
		tailwindcss: Tailwindcss,
		vercel: Vercel,
		html: Html,
		markdown: Markdown,
		css: Css,
		google: Google,
		github: Github,
		git: Git
	};

	// Icon sizes
	let size = 45;

	// Initialize prefersReducedMotion variable
	// let prefersReducedMotion: boolean = false;
	let prefersReducedMotion = false;
	console.log(prefersReducedMotion);

	// WCAG for people who struggle with motions sickness
	// Uses flexbox wrap to show icons instead of marquee if prefers-reduced-motion is activated for the user
	// Emulate via CMD + SHIFT + P and type in emulate prefers reduced motion to activate - may need a page refresh
	onMount((): (() => void) => {
		const mediaQuery: MediaQueryList = window.matchMedia('(prefers-reduced-motion: reduce)');
		// console.log(mediaQuery);

		// Set initial value
		prefersReducedMotion = mediaQuery.matches;

		// Listen for changes with explicit typing
		const handleChange: (event: MediaQueryListEvent) => void = (e) => {
			prefersReducedMotion = e.matches;

			console.log('Motion preference changed:', prefersReducedMotion);
		};

		mediaQuery.addEventListener('change', handleChange);

		// Cleanup function with explicit return type
		return (): void => {
			mediaQuery.removeEventListener('change', handleChange);
		};
	});
</script>

<div>
	<div class="heading mx-auto space-y-4">
		<h3 class="text-text text-xl font-semibold">Teknologier jeg har brukt</h3>
		<!-- 	Todo: Create a toggle button to render either ICONS or TEXT in marquee	 -->
	</div>

	<div data-animation={!prefersReducedMotion} id="outer" class="mx-auto max-w-xl">
		<div id="inner" class="">
			{#each Object.entries(iconComponents) as [key, component]}
				<svelte:component this={component} {size} />
			{/each}

			{#if !prefersReducedMotion}
				{#each Object.entries(iconComponents) as [key, component]}
					<svelte:component this={component} {size} />
				{/each}
			{/if}
		</div>
	</div>
</div>

<style>
	#inner {
		display: flex;
		flex-wrap: wrap;
		gap: 24px;
		padding: 16px 0;
	}

	/* Enable animations when allowed */
	#outer[data-animation='true'] {
		overflow: hidden;
		-webkit-mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
		mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
	}

	/* Disable animations when reduced motion is preferred */
	#outer[data-animation='true'] #inner {
		width: max-content;
		flex-wrap: nowrap;
		animation: scroll 20s linear infinite;
	}

	#outer[data-animation='true'] #inner > :global(*) {
		flex-shrink: 0;
	}

	@keyframes scroll {
		to {
			transform: translate(calc(-50% - 12px));
		}
	}
</style>
