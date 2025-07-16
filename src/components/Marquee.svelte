<script lang="ts">
	import Astro from './icons/Astro.svelte';
	import Next from './icons/Next.svelte';
	import Sveltekit from './icons/Sveltekit.svelte';
	import React from './icons/React.svelte';
	import Javascript from './icons/Javascript.svelte';
	import Typescript from './icons/Typescript.svelte';
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
		tailwindcss: Tailwindcss,
		vercel: Vercel,
		html: Html,
		markdown: Markdown,
		css: Css,
		google: Google,
		github: Github,
		git: Git
	};

	// Store key identifiers to loop over
	const icons = [
		'astro',
		'next',
		'svelte',
		'react',
		'javascript',
		'typescript',
		'tailwindcss',
		'vercel',
		'html',
		'markdown',
		'css',
		'google',
		'github',
		'git'
	];

	// Handle which component to be rendered based on key identifier
	const handleComponent = (prop: string) => {
		return iconComponents[prop as keyof typeof iconComponents];
	};
</script>

<div id="outer" class="mx-auto max-w-xl outline-1 outline-lime-200">
	<div id="inner" class="flex gap-4">
		{#each icons as icon}
			<svelte:component this={handleComponent(icon)} />
		{/each}
	</div>
</div>

<style>
	#outer {
	}

	#inner {
	}
</style>
