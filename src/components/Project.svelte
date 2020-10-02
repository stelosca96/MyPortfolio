<script lang="ts">
    import Button from "./Button.svelte";
    export let project: ProjectModel;
</script>

<style>
    .container {
        white-space: normal;
        display: inline-block;
        margin: 10px;
        position: relative;
        width: 320px;
        height: 440px;
        overflow: hidden;
        background-color: yellow;
        border-radius: 10%;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }
    .content {
        color: white;
        width: 240px;
        overflow: hidden;
        height: 360px;
        background-color: rgb(0,0,0); /* Fallback color */
        background-color: rgba(0,0,0, 0.7); /* Black w/opacity/see-through */
        padding: 40px 40px;
    }
    p {
        width: 240px;
        overflow: hidden;
    }

    .right {
        position: absolute;
        bottom: 20px;
        right: 0;
        transform: translate(-50%, -50%);
    }

</style>

<div style="background-image: url('{project.backgroundImg}')" class="container">
    <div class="content">
        <h1>{project.name}</h1>
        <p>{project.shortDescription}</p>
        <div class="right">
            <Button color="gold" textColor="black" value="{project.linkValue}" link="{project.link}"/>
        </div>
    </div>
</div>
