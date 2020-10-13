<script lang="ts">
	import showdown from 'showdown';
	import { onMount } from 'svelte'
	import { Container, Row, Col } from 'sveltestrap/src'
	import Icon from 'svelte-awesome/components/Icon.svelte'
	import { twitter, facebook, instagram, mailForward, linkedin, github } from 'svelte-awesome/icons';

	let htmlText = '';
	onMount(() => 	{
		const converter = new showdown.Converter();
		htmlText = converter.makeHtml('# hello, markdown!');
	});
</script>
<style>

	h2, h1 {
		margin-top: 1em;
	}
	section {
		text-align: left;
	}
	.color {
		width: 100%;
		height: 100%;
		background-color: #ff3e00;
	}
	.study_title {
		font-size: 1.1em;
		text-transform: uppercase;
		font-weight: bold;
	}
	.study_subtitle {
		font-weight: bold;
	}
	.study_light {
		font-weight: lighter;
	}
	span {
		display: block;
	}
	em {
		font-weight: bold;
		font-style: normal;
	}
	.profile {
		text-align: center;
	}
	.social {
		margin-bottom: 1em;
		width: 100%;
		text-align: center;
		/*overflow: hidden;*/
	}
	.text_right {
		text-align: center;
	}

	.social a {
		width: 135px;
	}
	Icon {
		margin-right: 10px;
	}
	#row {
		width:100%
	}
</style>
<svelte:head>
	<title>About</title>
</svelte:head>
	<!--	<h1>About me</h1>-->
	<Container fluid>
		<div id="row" class="row">
			<Col xs="12" lg="3">
				<Row>
					<Col xs="12" sm="5" lg="12">
					<div class="profile">
							<h1 class="title">STEFANO LOSCALZO</h1>
							<img src="img/foto_profilo.jpg" alt="Foto Stefano Loscalzo"/>
						</div>
					</Col>
					<Col xs="12" sm="7" lg="12">
						<h2 class="subtitle">Informazioni personali</h2>
						<Row>
							<Col sm="6">
								<span class="study_subtitle">Data di nascita: </span>
							</Col>
							<Col sm="6">
								<span>27/03/1996</span>
							</Col>
						</Row>
						<Row>
							<Col xs="12" sm="6">
								<span class="study_subtitle">Età: </span>
							</Col>
							<Col xs="12" sm="6">
								<span>24</span>
							</Col>
						</Row>
						<Row>
							<Col xs="12" sm="6">
								<span class="study_subtitle">Luogo di nascita: </span>
							</Col>
							<Col xs="12" sm="6">
								<span>Chieri(TO)</span>
							</Col>
						</Row>
						<Row>
							<Col xs="12" sm="6">
								<span class="study_subtitle">Cittadinanza: </span>
							</Col>
							<Col xs="12" sm="6">
								<span>Italiana</span>
							</Col>
						</Row>
						<Row>
							<Col xs="12" sm="6">
								<span class="study_subtitle">Recapito: </span>
							</Col>
							<Col xs="12" sm="6">
								<span>Via Tetto Nuovo 10c, 10025, Pino Torinese (TO)</span>
							</Col>
						</Row>
						<Row>
							<Col xs="12" sm="6">
								<span class="study_subtitle">Patente di guida: : </span>
							</Col>
							<Col xs="12" sm="6">
								<span>A2/B Automunito</span>
							</Col>
						</Row>
						<h2 class="subtitle">Competenze linguistiche</h2>
						<Row>
							<Col xs="12" sm="6">
								<span class="study_subtitle">Lingua madre: </span>
							</Col>
							<Col xs="12" sm="6">
								<span>Italiano</span>
							</Col>
						</Row>
						<Row>
							<Col xs="12" sm="6">
								<span class="study_subtitle">Lingua inglese: </span>
							</Col>
							<Col xs="12" sm="6">
								<span>IELTS 6.5, British Council, Livello europeo B2</span>
							</Col>
						</Row>
					</Col>
				</Row>
			</Col>
			<Col xs="12" lg="7">
				<h2 class="subtitle">Esperienze lavorative</h2>
				<Row>
					<Col sm="5">
						<span class="study_title">TEAM POLICUMBENT</span>
						<span class="study_subtitle">Responsabile del software e dell'elettronica</span>
						<span class="study_light">09/2017 - OGGI</span>
					</Col>
					<Col sm="7">
						<p>Team studentesco del Politecnico di Torino,attivo fin dal 2009 nella progettazione e realizzazione di Veicoli a Propulsione Umana, detentore dei record italiani maschile e femminile di velocità su bicicletta reclinata di 136km/h.</p>
						<p><em>Principali attività e responsabilità: </em>Gestione del software
							per l'acquisizione di dati dai sensori presenti sul veicolo, i
							quali devono essere mostrati al pilota e trasmessi ad un
							server remoto che ne permetta la visualizzazione in
							tempo reale e l’analisi tramite un’applicazione web. Inoltre
							sviluppo del software per la trasmissione elettronica
							progettata internamente al team e gestione dell’elettronica di bordo.</p>
						<p><em>Area aziendale: </em> engineering e progettazione</p>
						<p><em>Attività di volontariato/associazionismo</em></p>
					</Col>
				</Row>
				<h2 class="subtitle">Istruzione</h2>
				<Row>
					<Col sm="5">
						<span class="study_title">Laurea Magistrale</span>
						<span class="study_light">2019-2021</span>
					</Col>
					<Col sm="7">
						<span class="study_title">Politecnico di TORINO</span>
						<span class="study_subtitle">Dipartimento di Automatica e Informatica</span>
						<span class="study_subtitle">Corso di laurea magistrale in ingegneria informatica</span>
						<span>LM-32 - Laurea Magistrale in Ingegneria informatica</span>
						<span>Data presunta di conseguimento: <em>04/2021</em></span>
					</Col>
				</Row>
				<Row>
					<Col sm="5">
						<span class="study_title">Laurea</span>
						<span class="study_light">2015-2019</span>
					</Col>
					<Col sm="7">
						<span class="study_title">Politecnico di TORINO</span>
						<span class="study_subtitle">Dipartimento di Automatica e Informatica</span>
						<span class="study_subtitle">Corso di laurea in ingegneria informatica</span>
						<span>L-8 - Laurea in Ingegneria dell'informazione</span>
						<span>Durata ufficiale del corso di studi: 3 anni</span>
						<span>Votazione finale: <em>93/110</em></span>
						<span>Data di conseguimento: <em>15/03/2019</em></span>
					</Col>
				</Row>
				<Row>
					<Col sm="5">
						<span class="study_title">MATURITÀ SCIENTIFICA</span>
						<span class="study_light">2015</span>
					</Col>
					<Col sm="7">
						<span class="study_title">Liceo Scientifico, opzione Scienze Applicate</span>
						<span class="study_subtitle">Liceo Scientifico Statale Piero Gobetti , TORINO (TO)</span>
						<span>Voto Diploma: <em>90/110</em></span>
						<span>Tipo Diploma: diploma italiano</span>
						<span>Tipo Scuola: statale</span>
					</Col>
				</Row>
				<h2 class="subtitle">Informazioni aggiuntive</h2>
				<Row>
					<Col lg="12">
						<p>Ho praticato sport a livello agonistico, più precisamente ciclismo (XCO) a livello nazionale e internazionale fino ad un paio di anni fa, al momento continuo a praticare il ciclismo e ho la qualifica di direttore sportivo e maestro di mountain bike di primo e secondo livello.</p>
					</Col>
				</Row>
			</Col>
			<Col lg="2">
				<h2 class="subtitle text_right">Contattami</h2>
				<Row>
					<Col sm="4" md="2" lg="12">
						<div on:click={() => window.open('mailto:stefano.loscalzo@gmail.com','_blank')}>
							<div class="social button is-medium is-gitlab">
    					<span class="icon">
							<Icon data={mailForward}/>
						</span>
								<span>Email</span>
							</div>
						</div>
					</Col>
					<Col sm="4" md="2" lg="12">
						<div on:click={() => window.open('https://github.com/stelosca96','_blank')}>
							<div class="social button is-medium is-github">
    					<span class="icon">
							<Icon data={github}/>
						</span>
								<span>GitHub</span>
							</div>
						</div>
					</Col>
					<Col sm="4" md="2" lg="12">
						<div on:click={() => window.open('https://www.linkedin.com/in/stefano-loscalzo/','_blank')}>
							<div class="social button is-medium is-linkedin">
  						<span class="icon">
							<Icon data={linkedin}/>
						</span>
								<span>Linkedin</span>
							</div>
						</div>
					</Col>
					<Col sm="4" md="2" lg="12">
						<div on:click={() => window.open('https://www.facebook.com/ste.sid','_blank')}>
							<div class="social button is-medium is-facebook">
						<span class="icon">
							<Icon data={facebook}/>
						</span>
								<span>Facebook</span>
							</div>
						</div>
					</Col>
					<Col sm="4" md="2" lg="12">
						<div on:click={() => window.open('https://twitter.com/SteLosca96','_blank')}>
							<div class="social button is-medium is-twitter">
						<span class="icon">
							<Icon data={twitter}/>
						</span>
								<span>Twitter</span>
							</div>
						</div>
					</Col>
					<Col sm="4" md="2" lg="12">
						<div on:click={() => window.open('https://www.instagram.com/stelosca96/','_blank')}>
							<div class="social button is-medium is-instagram">
    					<span class="icon">
							<Icon data={instagram}/>
						</span>
								<span>Instagram</span>
							</div>
						</div>
					</Col>

				</Row>
			</Col>
		</div>
	</Container>
