<script lang="ts">
    import Button from "./Button.svelte";
    export let project: ProjectModel;
</script>

<style>
    h1 {
        color: white;
    }
    .cont {
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
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
        background-position: center;
    }
    .c {
        color: white;
        width: 320px;
        overflow: hidden;
        height: 440px;
        background-color: rgb(0,0,0); /* Fallback color */
        background-color: rgba(0,0,0, 0.7); /* Black w/opacity/see-through */
        padding: 40px 40px;
    }
    p {
        margin-top: 1em;
        width: 240px;
        overflow: hidden;
        text-align: left;
    }

    .right {
        position: absolute;
        bottom: 20px;
        right: 0;
        transform: translate(-50%, -50%);
    }

</style>

<div style="background-image: url({project.backgroundImg})" class="cont">
    <div class="c">
        <h1 class="title">{project.name}</h1>
        <p>{project.shortDescription}</p>
        <div class="right">
            <Button color="gold" textColor="black" value="{project.linkValue}" link="{project.link}"/>
        </div>
    </div>
</div>
