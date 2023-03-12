<script lang="ts">
  import Header from '../../components/Header.svelte';
  import Youtube from '../../components/Youtube.svelte';
  import Hobby from '../../components/Hobby.svelte';
  import type { AboutData } from '../../types/About.types';

  export let data;
  const { youtube, hobby, hobbies }: AboutData = data || {};
</script>

<svelte:head>
  <title>About | Kapeesh.dev</title>
  <meta name='description' content='Get to know me' />
</svelte:head>

<Header titleColor='rgb(125 116 190 / 11%)' pageTitleColor='rgb(21, 0, 158)' subtitleColor='#5a1f9f'>
  <svelte:fragment slot='title'>AboutAboutAboutAboutAboutAbout</svelte:fragment>
  <svelte:fragment slot='pageTitle'>About Me</svelte:fragment>
  <svelte:fragment slot='subtitle'>Learning by Living</svelte:fragment>
</Header>

<Youtube
  title={youtube?.title}
  description={youtube.description}
  videoUrl={youtube.videoUrl}
/>

<Hobby
  title={hobby?.title}
  description={hobby?.blurb.json.content[0].content[0].value}
  images={hobby?.imagesCollection.items}
/>

<Header titleColor='rgb(125 116 190 / 11%)' pageTitleColor='rgb(21, 0, 158)' subtitleColor='#5a1f9f'>
  <svelte:fragment slot='title'>HobbiesHobbiesHobbiesHobbies</svelte:fragment>
  <svelte:fragment slot='pageTitle'>Hobbies</svelte:fragment>
</Header>

<div class='hobbiesWrapper'>
  {#each hobbies?.items as hobby}
    <Hobby
      title={hobby?.title}
      description={hobby?.blurb.json.content[0].content[0].value}
      images={hobby?.imagesCollection.items}
    />
  {/each}
</div>
