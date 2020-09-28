<script  lang="ts">
    import Project from "../components/Project.svelte";
    import ProjectModel from "../models/ProjectModel";
    const projects = [
        new ProjectModel('DamnEat', 'Cibo asporto giallo. GLOVOOOOOOOO', '/', 'APRI'),
        new ProjectModel('WHPSC Sim', 'Cibo asporto giallo. GLOVOOOOOOOO', '/', 'APRI'),
        new ProjectModel('Backup Software', 'Cibo asporto giallo. GLOVOOOOOOOO', '/', 'APRI'),
        new ProjectModel('VirtualLabs', 'Cibo asporto giallo. GLOVOOOOOOOO', '/', 'APRI'),
        new ProjectModel('TaurusApp', 'Cibo asporto giallo. GLOVOOOOOOOO', '/', 'APRI'),
        new ProjectModel('Policumbent BOB', 'Cibo asporto giallo. GLOVOOOOOOOO', '/', 'APRI'),
        new ProjectModel('Policumbent Server', 'Software di backend per la gestione e la manipolazione dei dati.', '/', 'APRI')
    ];
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
