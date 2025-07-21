<script lang="ts">
	import Python from './icons/Python.svelte';
	import Csharp from './icons/Csharp.svelte';
	import Dotnet from './icons/Dotnet.svelte';

	const technologies = [
		{
			component: 'Python',
			name: 'Python'
		},
		{
			component: 'Csharp',
			name: 'C#'
		},
		{
			component: 'Dotnet',
			name: '.NET'
		}
	];

	const componentMap = {
		Python,
		Csharp,
		Dotnet
	};
</script>

<section
	id="exploring"
	class="text-text bg-test mx-auto grid place-content-center space-y-8 p-8 py-16"
>
	<div class="heading space-y-1">
		<span class="text-muted-foreground text-tertiary block text-sm tracking-widest uppercase"
			>Utforsker</span
		>
		<h1 class="text-3xl font-bold tracking-tight">Programmer jeg er interessert i</h1>
		<div class="bg-text h-[2px] w-8 rounded-full"></div>
	</div>

	<div class="space-y-4">
		{#each technologies as tech}
			<div class="flex items-center gap-2">
				<svelte:component this={componentMap[tech.component as keyof typeof componentMap]} />
				<div>{tech.name}</div>
			</div>
		{/each}
	</div>
</section>
