<script>
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

	<form name="contact" netlify class="space-y-6">
		<div>
			<label for="name" class="mb-2 block text-sm font-medium text-white"> Name </label>
			<input
				type="text"
				id="name"
				name="name"
				required
				class="w-full rounded-md border border-neutral-700 bg-neutral-800 px-3 py-2 text-white placeholder-neutral-400 transition-colors focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:outline-none"
				placeholder="Your full name"
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
				placeholder="your@email.com"
			/>
		</div>

		<div>
			<label for="message" class="mb-2 block text-sm font-medium text-white"> Message </label>
			<textarea
				id="message"
				name="message"
				rows="4"
				required
				class="resize-vertical w-full rounded-md border border-neutral-700 bg-neutral-800 px-3 py-2 text-white placeholder-neutral-400 transition-colors focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:outline-none"
				placeholder="Tell us how we can help you..."
			></textarea>
		</div>

		<button
			type="submit"
			class="w-full rounded-md bg-purple-600 px-4 py-2 font-medium text-white transition-colors hover:bg-purple-700 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-neutral-900 focus:outline-none"
		>
			Send Message
		</button>
	</form>
</section>
