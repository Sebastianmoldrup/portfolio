<script lang="ts">
	import { Github, ExternalLink, Construction } from '@lucide/svelte';
	import projects from '../content/projects.json';
	import Astro from './icons/Astro.svelte';
	import Next from './icons/Next.svelte';
	import Tailwindcss from './icons/Tailwindcss.svelte';
	import Typescript from './icons/Typescript.svelte';
	import Javascript from './icons/Javascript.svelte';
	import Supabase from './icons/Supabase.svelte';
	import Vercel from './icons/Vercel.svelte';
	import Netlify from './icons/Netlify.svelte';
	import Sveltekit from './icons/Sveltekit.svelte';
	import Google from './icons/Google.svelte';
	import Html from './icons/HTML.svelte';
	import Markdown from './icons/Markdown.svelte';
	import Css from './icons/CSS.svelte';

	const components = {
		astro: Astro,
		next: Next,
		sveltekit: Sveltekit,
		tailwindcss: Tailwindcss,
		typescript: Typescript,
		javascript: Javascript,
		supabase: Supabase,
		vercel: Vercel,
		netlify: Netlify,
		google: Google,
		html: Html,
		markdown: Markdown,
		css: Css
	};

	const handleComponent = (prop: string) => {
		const key = prop.toLocaleLowerCase().replace(/\s+/g, '');
		return components[key as keyof typeof components];
	};
</script>

<section class="text-text grid place-content-center space-y-16 p-8 py-24">
	<div class="heading mx-auto space-y-1">
		<span class="text-muted-foreground text-tertiary block text-sm tracking-widest uppercase"
			>Prosjekter</span
		>
		<h1 class="text-3xl font-bold tracking-tight">Portefølje</h1>
		<div class="bg-text h-[2px] w-8 rounded-full"></div>
	</div>

	<div class="grid grid-cols-1 place-items-center gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each projects as project}
			<div
				class="group w-[320px] overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow duration-200 hover:shadow-md"
			>
				<!-- Image/WIP Section -->
				<div class="relative">
					{#if !project.wip}
						<img
							src={project.src}
							alt={project.alt}
							class="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
						/>
					{:else}
						<div class="flex h-48 items-center justify-center bg-gray-50 text-gray-500">
							<div class="flex items-center gap-2">
								<Construction class="h-5 w-5" />
								<span class="font-medium">Kommer snart!</span>
							</div>
						</div>
					{/if}
				</div>

				<!-- Content Section -->
				<div class="p-5">
					<!-- Title -->
					<h3 class="text-primary mb-3 line-clamp-2 text-xl font-semibold">
						{project.title}
					</h3>

					<!-- Tech Stack -->
					<div class="mb-4">
						<div class="flex flex-wrap gap-2">
							{#each project.techstack as tech}
								<div class="flex items-center">
									{#if handleComponent(tech.title)}
										<div class="flex-shrink-0" title={tech.title}>
											<svelte:component this={handleComponent(tech.title)} />
										</div>
									{:else}
										<span
											class="rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700"
										>
											{tech.title}
										</span>
									{/if}
								</div>
							{/each}
						</div>
					</div>

					<!-- Action Buttons -->
					{#if !project.wip}
						<div class="flex gap-2">
							{#each project.links as link}
								<a
									href={link.url}
									target="_blank"
									rel="noopener noreferrer"
									class="flex flex-1 items-center justify-center gap-2 px-3 py-2 {link.icon ===
									'Github'
										? 'bg-gray-900 hover:bg-gray-800'
										: 'bg-primary hover:bg-primary/90'} rounded-md text-sm font-medium text-white transition-colors duration-200"
								>
									{#if link.icon === 'Github'}
										<Github class="h-4 w-4" />
									{:else}
										<ExternalLink class="h-4 w-4" />
									{/if}
									{link.icon === 'Github' ? 'GitHub' : 'Live'}
								</a>
							{/each}
						</div>
					{:else}
						<div class="flex gap-2">
							<button
								disabled
								class="flex flex-1 cursor-not-allowed items-center justify-center gap-2 rounded-md bg-gray-200 px-3 py-2 text-sm font-medium text-gray-400"
							>
								<Github class="h-4 w-4" />
								GitHub
							</button>
							<button
								disabled
								class="flex flex-1 cursor-not-allowed items-center justify-center gap-2 rounded-md bg-gray-200 px-3 py-2 text-sm font-medium text-gray-400"
							>
								<ExternalLink class="h-4 w-4" />
								Live
							</button>
						</div>
					{/if}
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	.line-clamp-2 {
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
</style>
