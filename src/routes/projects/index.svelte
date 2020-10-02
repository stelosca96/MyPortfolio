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
    section {
        padding: 1em 2em;
    }
    @media only screen and (max-device-width: 550px) {
        .content {
            overflow-x: auto;
            white-space: nowrap;
            height: 450px;
        }
    }

    @media only screen and (min-device-width: 550px) {

    }

    ::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        background-color: #f5f5f5;
    }

    ::-webkit-scrollbar {
        width: 10px;
        background-color: #f5f5f5;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #ff3e00;
        background-image: -webkit-linear-gradient(
                45deg,
                rgba(255, 255, 255, 0.2) 25%,
                transparent 25%,
                transparent 50%,
                rgba(255, 255, 255, 0.2) 50%,
                rgba(255, 255, 255, 0.2) 75%,
                transparent 75%,
                transparent
        );
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
