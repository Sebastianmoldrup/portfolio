<script>
	import careers from '../content/career.json';
</script>

<section
	id="career"
	class="text-text bg-test mx-auto grid place-content-center space-y-8 p-8 py-16"
>
	<div class="heading space-y-1">
		<span class="text-muted-foreground text-tertiary block text-sm tracking-widest uppercase"
			>Karriere</span
		>
		<h2 class="text-3xl font-bold tracking-tight">Fra boredekk til utvikling</h2>
		<div class="bg-text h-[2px] w-8 rounded-full"></div>
	</div>

	<div class="max-w-xl space-y-8 border-l-2 pl-6">
		{#each careers as career}
			<div class="grid">
				<div class="flex items-center gap-2">
					<div class="bg-tertiary h-2 w-2 rounded-full"></div>
					<span class="text-paragraph">{career.date}</span>
				</div>
				<span>{career.role}</span>
				<span class="text-paragraph">{career.employer}</span>
				<p class="mt-2">{career.desc}</p>
			</div>
		{/each}
	</div>
</section>
