<script lang="ts">
	import Nav from '../components/Nav.svelte';

	export let segment: string;
</script>

<style>
	main {
		position: relative;
		height: 93.9vh;
		/*max-width: 56em;*/
		/*padding: 2em;*/
		background-color: white;
		margin: 0 auto;
		box-sizing: border-box;
	}

</style>

<Nav {segment}/>

<main>
	<slot>
	</slot>
</main>
