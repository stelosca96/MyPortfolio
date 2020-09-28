<script>
	import Button from "../components/Button.svelte";
	import {goto} from "@sapper/app";

</script>
<style>
	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}

	.bg_image {
		position: absolute;
		width: 100%;
		height: 100%;
		background-image: url("/img/IMGP6768.jpg");
		background-position: center; /* Center the image */
		background-repeat: no-repeat; /* Do not repeat the image */
		background-size: cover; /* Resize the background image to cover the entire container */
		filter: blur(8px);
		-webkit-filter: blur(8px);
	}
	.bg_filter {
		position: absolute;
		width: 100%;
		height: 100%;
		/*z-index: 3;*/
		background-color: rgb(0,0,0); /* Fallback color */
		background-color: rgba(0,0,0, 0.4); /* Black w/opacity/see-through */
	}
	.content {
		/*padding-top: calc(5vw + 3rem);*/
		text-align: left;
		font-family: "Work Sans", Helvetica, sans-serif;
		color: white;
		position: absolute;
		top: 0;
		width: 100%;
		height: 100%;
		/*background-color: #1e2029;*/
		/*max-width: 56em;*/
	}
	.text {
		margin-top: 3rem;
		padding: 5em;
	}
	.text:hover h1 {
		font-size: 5em;
		transition-duration: 200ms
	}
	section {
		width: 100%;
	}
	h1 {
		/*margin: 10px 0;*/
		/*font-size: 400%;*/
	}
	.buttons {
		position: absolute;
		top: auto;
		bottom: 10%;
		transform: translateY(-10%);
		margin-top: 3em;
		padding: 5em;
	}
</style>

<svelte:head>
	<title>Stefano Loscalzo</title>
</svelte:head>

<section>
	<div class="bg_image"></div>
	<div class="bg_filter"></div>
	<div class="content">
		<div class="text">
			<h1>Ciao, sono Stefano Loscalzo</h1>
			<p>Studente di ingegneria informatica al Politecnico di Torino e bla bla.</p>
		</div>
		<div class="buttons">
			<Button value="Scarica CV" on:click/>
			<Button value="I miei progetti" link="projects"/>
			<Button value="Contattami" link="about"/>
		</div>

	</div>
</section>
