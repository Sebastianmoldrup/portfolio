<script>
	import { Smartphone, Menu, Linkedin, Github } from '@lucide/svelte';
	import Marquee from './Marquee.svelte';
	import Socials from './Socials.svelte';
	let src = './selfie.png';
</script>

<section
	id="about"
	class="text-text mdmax-w-xl mx-auto grid max-w-[375px] place-content-center space-y-8 p-8 py-24 md:space-y-16"
>
	<div class="heading space-y-1">
		<span class="text-muted-foreground text-tertiary block text-sm tracking-widest uppercase"
			>Om meg</span
		>
		<h1 class="text-3xl font-bold tracking-tight">Sebastian Møldrup</h1>
		<div class="bg-text h-[2px] w-8 rounded-full"></div>
	</div>
	<div class="space-y-8 md:flex md:items-center md:gap-x-16">
		<img {src} alt="bilde av sebastian" class="mx-auto w-[184px] rounded-md object-contain" />
		<div class="space-y-4">
			<p>
				Jeg er en engasjert og løsningsorientert IT-utvikler med en tverrfaglig bakgrunn fra både
				IT-bransjen og offshore boreoperasjoner.
			</p>
			<div class="flex justify-between">
				<button
					class="bg-btn text-text rounded-md px-4 py-2 transition hover:cursor-pointer hover:opacity-90"
					>Kontakt meg</button
				>
				<Socials />
			</div>
		</div>
	</div>
</section>

<Marquee />
