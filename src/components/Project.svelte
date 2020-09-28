<script lang="ts">
    import Button from "./Button.svelte";
    export let project: ProjectModel;
</script>

<style>
    .container {
        display: inline-block;
        margin: 10px;
        position: relative;
        width: 300px;
        height: 400px;
        overflow: hidden;
        background-color: yellow;
        border-radius: 10%;
    }
    .content {
        color: white;
        width: 220px;
        height: 320px;
        background-color: rgb(0,0,0); /* Fallback color */
        background-color: rgba(0,0,0, 0.2); /* Black w/opacity/see-through */
        padding: 40px 40px;
    }

    .right {
        position: absolute;
        bottom: 20px;
        right: 0;
        transform: translate(-50%, -50%);
    }

</style>

<div class="container">
    <div class="content">
        <h1>{project.name}</h1>
        <p>{project.shortDescription}</p>
        <div class="right">
            <Button value="{project.linkValue}" link="{project.link}"/>
        </div>
    </div>
</div>
