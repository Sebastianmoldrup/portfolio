<script lang="ts">
	let submitted = false;

	const handleSubmit = async (e: SubmitEvent) => {
		e.preventDefault();
		submitted = true;
	};
</script>

<section
	id="contact"
	class="text-text mx-auto grid max-w-xl place-content-center space-y-8 p-8 py-16"
>
	<div class="heading space-y-1">
		<span class="text-muted-foreground text-tertiary block text-sm tracking-widest uppercase"
			>Kontakt</span
		>
		<h1 class="text-3xl font-bold tracking-tight">Gi en lyd!</h1>
		<div class="bg-text h-[2px] w-8 rounded-full"></div>
	</div>

	{#if submitted}
		<div
			class="animate-fadeIn flex scale-95 flex-col items-center justify-center space-y-6 rounded-2xl p-8 text-center opacity-0 shadow-xl transition-all duration-500"
			style="background:var(--color-test);"
		>
			<svg
				class="h-16 w-16"
				style="color:var(--color-tertiary);"
				fill="none"
				stroke="currentColor"
				stroke-width="2.5"
				viewBox="0 0 24 24"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
			</svg>

			<div class="space-y-2">
				<h2 class="text-2xl font-bold" style="color:var(--color-text);">
					Tusen takk for meldingen!
				</h2>
				<p class="max-w-sm text-sm" style="color:var(--color-paragraph);">
					Jeg har mottatt den og tar kontakt med deg så snart jeg kan. Ha en fantastisk dag videre!
				</p>
			</div>

			<button
				onclick={() => (submitted = false)}
				class="mt-4 rounded-lg px-4 py-2 text-sm font-medium transition"
				style="
            background:var(--color-btn);
            color:var(--color-text);
        "
			>
				Send en ny melding
			</button>
		</div>
	{:else if !submitted}
		<form
			name="contact"
			netlify="true"
			class="scale-100 space-y-6 opacity-100 transition-all duration-500"
			method="POST"
			onsubmit={handleSubmit}
		>
			<div>
				<label for="name" class="mb-2 block text-sm font-medium text-white"> Navn </label>
				<input
					type="text"
					id="name"
					name="name"
					required
					class="w-full rounded-md border border-neutral-700 bg-neutral-800 px-3 py-2 text-white placeholder-neutral-400 transition-colors focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:outline-none"
					placeholder="Ditt fulle navn"
				/>
			</div>

			<div>
				<label for="email" class="mb-2 block text-sm font-medium text-white"> Email </label>
				<input
					type="email"
					id="email"
					name="email"
					required
					class="w-full rounded-md border border-neutral-700 bg-neutral-800 px-3 py-2 text-white placeholder-neutral-400 transition-colors focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:outline-none"
					placeholder="din@email.com"
				/>
			</div>

			<div>
				<label for="message" class="mb-2 block text-sm font-medium text-white"> Melding </label>
				<textarea
					id="message"
					name="message"
					rows="4"
					required
					class="resize-vertical w-full rounded-md border border-neutral-700 bg-neutral-800 px-3 py-2 text-white placeholder-neutral-400 transition-colors focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:outline-none"
					placeholder="Hva kan jeg hjelpe deg med?"
				></textarea>
			</div>

			<button
				type="submit"
				onclick={() => (submitted = true)}
				class="w-full rounded-md bg-purple-600 px-4 py-2 font-medium text-white transition-colors hover:bg-purple-700 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-neutral-900 focus:outline-none"
			>
				Send melding
			</button>
		</form>
	{/if}
</section>

<style>
	@keyframes fadeIn {
		0% {
			opacity: 0;
			transform: scale(0.95);
		}
		100% {
			opacity: 1;
			transform: scale(1);
		}
	}
	.animate-fadeIn {
		animation: fadeIn 0.4s ease-out forwards;
	}
</style>
