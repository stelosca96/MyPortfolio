<script>
    import {goto} from "@sapper/app";
    export let value;
    export let blankPage = false;
    export let link = '/';
    export let color = '#3F000000';
    export let textColor = 'white';

    function openLink(){
        if(blankPage)
            window.open(link,'_blank');
        else
            goto(link);
    }
</script>
<style>
    button {
        font-weight: 500;
        line-height: 1.15;
        border: 0;
        min-width: 120px;
        padding: 13px 18px;
        outline: none;
        border-radius: 20px;
        font-size: 1em;
        box-shadow: 3px 4px 17px 0 rgba(53, 142, 215, 0.3);
    }
    button:hover {
        box-shadow: 3px 4px 17px 1px rgba(132, 167, 196, 0.3);
    }
    button:active {
        box-shadow: inset 0 1px 2px 0 rgba(24, 100, 159, 0.55),
        0 0 2px 0 rgba(24, 100, 159, 0.55);
    }


</style>
<button style="background-color: {color}; color: {textColor}" on:click={openLink}>{value}</button>
