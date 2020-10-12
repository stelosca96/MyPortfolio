<script  lang="ts">
    import Project from "../../components/Project.svelte";
    import ProjectModel from "../../models/ProjectModel";
    import { onMount } from 'svelte';
    let projects = [];
    onMount(() => {
        fetch(`data/projects.json`)
            .then(data => data.json())
            .then(data => data.map(
                e => new ProjectModel(e.name, e.shortDescription, e.description, e.language, e.backgroundImg)))
            .then(data => projects = data)
            .catch(error => console.log(error));
    });
</script>
<style>

    @media only screen and (max-device-width: 550px) {
        .content {
            overflow-x: auto;
            white-space: nowrap;
            height: 500px;
        }
    }

    @media only screen and (min-device-width: 550px) {
        .content {
            display: inline-block;
            text-align: center;

        }
    }



</style>

<svelte:head>
    <title>Progetti</title>
</svelte:head>

<section>
    <h1 class="title">I miei progetti</h1>
    <p class="subtitle">Un piccolo elenco dei miei progetti personali, scolastici e di altro genere.</p>
    <div class="content">
        {#each projects as project}
            <Project {project}/>
        {/each}
    </div>
</section>
