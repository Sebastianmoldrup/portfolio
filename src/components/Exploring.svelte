<script>
	import Python from '../components/icons/Python.svelte';
	import Csharp from '../components/icons/Csharp.svelte';
	import Dotnet from './icons/Dotnet.svelte';

	const components = {
		python: Python,
		csharp: Csharp,
		dotnet: Dotnet
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
		<h1 class="text-3xl font-bold tracking-tight">Nye teknologier</h1>
		<div class="bg-text h-[2px] w-8 rounded-full"></div>
	</div>

	<div class="flex gap-4">
		<p>Hva jeg</p>
		<Python />
		<Csharp />
		<Dotnet />
	</div>
</section>
