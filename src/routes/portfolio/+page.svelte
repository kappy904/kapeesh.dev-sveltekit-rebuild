<script lang='ts'>
  import Header from '../../components/Header.svelte';
  import Portfolio from '../../components/Portfolio.svelte';
  import ClientLogos from '../../components/ClientLogos.svelte';

  export let data;
  let { portfolios, clientLogos } = data;
</script>

<svelte:head>
  <title>Portfolio | Kapeesh.dev</title>
  <meta name='description' content='Highlighted Work' />
</svelte:head>

<Header titleColor='rgb(125 116 190 / 11%)' pageTitleColor='rgb(21, 0, 158)' subtitleColor='#5a1f9f'>
  <svelte:fragment slot='title'>PortfolioPortfolioPortfolioPortfolioPortfolioPortfolio</svelte:fragment>
  <svelte:fragment slot='pageTitle'>My Portfolio</svelte:fragment>
  <svelte:fragment slot='subtitle'>Learning by Doing</svelte:fragment>
</Header>

<div class='portfolioWrapper'>
  {#each portfolios as portfolio}
    <Portfolio
      videoPoster={`https:${portfolio?.fields?.videoCover?.fields?.file?.url}`}
      videoSrc={portfolio?.fields?.video?.fields?.file?.url}
      backgroundImage={portfolio?.fields?.media?.[0]?.fields?.file?.url}
      title={portfolio?.fields?.title}
      description={portfolio?.fields?.description}
      learnings={portfolio?.fields?.learnings}
      awards={portfolio?.fields?.awards}
    />
  {/each}
</div>

<Header titleColor='rgb(125 116 190 / 11%)' pageTitleColor='rgb(21, 0, 158)' subtitleColor='#5a1f9f'>
  <svelte:fragment slot='title'>ClientsClientsClientsClients</svelte:fragment>
  <svelte:fragment slot='pageTitle'>Clients</svelte:fragment>
</Header>

<div class='clientWrapper relative flex flex-wrap justify-center w-16 h-16 rounded-full p-2 relative bg-cover-wrapper mb-4'>
  {#each clientLogos?.[0]?.fields?.list as logo}
    <ClientLogos size={logo.metadata?.tags[0]?.sys.id}
                 imageUrl={logo.fields.file.url} />
  {/each}
</div>

