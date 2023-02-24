<script>
  import Header from '../../components/Header.svelte';
</script>
<svelte:head>
  <title>About | Kapeesh.dev</title>
  <meta name="description" content="Get to know me" />
</svelte:head>

<Header titleColor='rgb(125 116 190 / 11%)' pageTitleColor='rgb(21, 0, 158)' subtitleColor='#5a1f9f'>
  <svelte:fragment slot='title'>AboutAboutAboutAboutAboutAbout</svelte:fragment>
  <svelte:fragment slot='pageTitle'>About Me</svelte:fragment>
  <svelte:fragment slot='subtitle'>Learning by Living</svelte:fragment>
</Header>
