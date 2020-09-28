<script context="module" lang="ts">
	import ProjectModel from "../../models/ProjectModel";

	export async function preload(page, session) {
		// the `slug` parameter is available because this file
		// is called [slug].svelte
		const { name } = page.params;

		// `this.fetch` is a wrapper around `fetch` that allows
		// you to make credentialled requests on both
		// server and client
		const res = await this.fetch(`data/projects.json`);
		const projects = await res.json();
		console.log(projects);
		console.log(name);
		const project = projects
				.filter(e => e.name === name)
				.map(e => new ProjectModel(e.name, e.shortDescription, e.description))[0];
		return { project };
	}</script>

<script lang="ts">
	export let project: ProjectModel;
	$: console.log(project);
</script>

<style>
	section {
		padding: 1em 2em;
	}
</style>

<svelte:head>
	<title>{project.name}</title>
</svelte:head>

<section>
	<div class="content">
		<h1>{project.name}</h1>
		<p>{project.description}</p>
	</div>
</section>
