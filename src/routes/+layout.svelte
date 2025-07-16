<script lang="ts">
	import '../app.css';
	import Footer from '../components/Footer.svelte';
	import Navigation from '../components/Navigation.svelte';

	let { children } = $props();
</script>

<Navigation />

{@render children()}

<Footer />
