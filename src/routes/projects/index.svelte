<script  lang="ts">
    import Project from "../../components/Project.svelte";
    import ProjectModel from "../../models/ProjectModel";
    import { onMount } from 'svelte';
    let projects = [];
    onMount(() => {
        fetch(`data/projects.json`)
            .then(data => data.json())
            .then(data => data.map(
                e => new ProjectModel(e.name, e.shortDescription, e.description)))
            .then(data => projects = data)
            .catch(error => console.log(error));
    });
</script>
<style>
    section {
        padding: 1em 2em;
    }
</style>

<svelte:head>
    <title>My Projects</title>
</svelte:head>

<section>
    <h1>My Projects</h1>
    <div class="content">
        {#each projects as project}
            <Project {project}/>
        {/each}
    </div>
</section>
