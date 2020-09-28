<script>
    import Project from "../components/Project.svelte";
    import ProjectModel from "../models/ProjectModel";
    const projects = [
        new ProjectModel('DamnEat', 'Cibo asporto giallo. GLOVOOOOOOOO', '/', 'APRI'),
        new ProjectModel('BackupSoftware', 'Cibo asporto giallo. GLOVOOOOOOOO', '/', 'APRI'),
        new ProjectModel('VirtualLabs', 'Cibo asporto giallo. GLOVOOOOOOOO', '/', 'APRI'),
        new ProjectModel('TaurusApp', 'Cibo asporto giallo. GLOVOOOOOOOO', '/', 'APRI'),
        new ProjectModel('Policumbent BOB', 'Cibo asporto giallo. GLOVOOOOOOOO', '/', 'APRI')
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
    <p>This is the 'about' page. There's not much here.</p>
    <div class="content">
        {#each projects as bike}
            <Project/>
        {/each}
    </div>
</section>
