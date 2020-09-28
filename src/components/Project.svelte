<script>
    import Button from "./Button.svelte";
    export let name;
    export let description;
    export let link = '/';
</script>

<style>
    .container {
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
        width: 100%;
        height: 100%;
        background-color: rgb(0,0,0); /* Fallback color */
        background-color: rgba(0,0,0, 0.2); /* Black w/opacity/see-through */
        padding: 50px;

    }

    .right {
        position: absolute;
        bottom: 0;
        right: 0;
        transform: translate(-50%, -50%);
    }

</style>

<div class="container">
    <div class="content">
        <h1>{name}</h1>
        <p>{description}</p>
        <div class="right">
            <Button value="Apri" link="{link}"/>
        </div>
    </div>
</div>
