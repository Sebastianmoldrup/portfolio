<script lang="ts">
	import Github from './icons/Github.svelte';
	import Linkedin from './icons/Linkedin.svelte';

	let size = 25;

	const iconComponents = {
		github: Github,
		linkedin: Linkedin
	};

	const socials = [
		{
			icon: 'github',
			link: '#'
		},
		{
			icon: 'linkedin',
			link: '#'
		}
	];

	const handleComponent = (prop: string) => {
		return iconComponents[prop as keyof typeof iconComponents];
	};
</script>

<div class="flex items-center gap-4">
	{#each socials as social}
		<a href={social.link}>
			<svelte:component this={handleComponent(social.icon)} {size} />
		</a>
	{/each}
</div>
