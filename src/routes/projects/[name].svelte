<script context="module" lang="ts">
	import ProjectModel from "../../models/ProjectModel";
	import showdown from 'showdown';

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
				.map(e => new ProjectModel(e.name, e.shortDescription, e.code, e.language, e.backgroundImg, e.demo, e.github))[0];
		let mdDescription: string = 'Work in progress!';
		try {
			const res2 = await this.fetch(`data/projects/${project.code}.md`);
			console.log(res2);
			if (res2.status === 200)
				mdDescription = await res2.text();
		} catch (e) {
			console.log(e);
		}
		const converter = new showdown.Converter();
		const htmlDescription = converter.makeHtml(mdDescription);
		return { project, htmlDescription };
	}
</script>

<script lang="ts">
	import Button from "../../components/Button.svelte";
	export let project: ProjectModel;
	export let htmlDescription: string;
	$: console.log(project);
	$: console.log(htmlDescription);
</script>

<style>
	section {
		padding: 1em 2em;
	}
	section h1 {
		text-align: center;
	}
	h1 {
		font-size: 3em;
	}
	.photo {
		width: calc(100% - 2em);
		height: calc(100vh - 400px);
		/*margin: 2em;*/
		object-fit: contain; /* Do not scale the image */
		object-position: center; /* Center the image within the element */
	}
	.right {
		position: fixed;
		bottom: 2em;
		right: 2em;
	}
	.left {
		position: fixed;
		bottom: 2em;
		left: 2em;
	}
	.center {
		position: fixed;
		bottom: 2em;
		left: 50%;
		transform: translateX(-50%);
	}
	em {
		font-weight: bold;
		font-style: normal;
		margin-right: 5px;
	}
</style>

<svelte:head>
	<title>{project.name}</title>
</svelte:head>

<section>
	<div class="content">
		<h1>{project.name}</h1>
		<p><em>Linguaggi:</em> {project.language}</p>
		<div>{@html htmlDescription}</div>
		<img class="photo" src="{project.backgroundImg}" alt="Photo {project.name}"/>
		{#if project.github !== ''}
			<div  class="left">
				<Button textColor="black"  blankPage="true" color="gold" link="{project.github}" value="GITHUB"/>
			</div>
		{/if}
		{#if project.demo !== ''}
			<div  class="center">
				<Button textColor="black" blankPage="true" color="gold" link="{project.demo}" value="DEMO"/>
			</div>
		{/if}
		<div  class="right">
			<Button textColor="black" color="gold" link="/projects" value="TORNA INDIETRO"/>
		</div>
	</div>
</section>
