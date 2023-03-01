<script>
  import { marked } from 'marked';

  export let videoPoster;
  export let videoSrc;
  export let backgroundImage;
  export let title;
  export let description;
  export let learnings;
  export let awards;
</script>
<div
  class='portfolio flex container mx-auto justify-center items-center mb-20 md:mb-32'
>
  <div class='flex-auto mx-8'>
    {#if videoSrc}
      <i
        class='circleLarge bg-purple relative overflow-hidden block bg-cover mx-auto mb-4 md:mb-2'
      >
        <video
          width='100%'
          controls
          height='100%'
          class='videoPlayer absolute  object-cover'
          loop
          poster={videoPoster}
        >
          <source
            src={videoSrc}
            type='video/mp4'
          />
        </video>
      </i>
    {/if}
    {#if backgroundImage}
      <i class='circleLarge bg-center bg-purple relative overflow-hidden rounded-full block bg-cover mx-auto mb-4 md:mb-2'
         style='background-image: url({backgroundImage})'></i>
    {/if}
  </div>
  <div class='px-3'>
    <h2 class='font-secondary tracking-tighter leading-5 md:text-3xl text-2xl leading-none mb-4 font-extrabold text-blue md:leading-8'>
      {title}
    </h2>
    <div class='font-light font-primary leading-6 text-base tracking-wider mb-6'>
      {@html marked.parse(description)}
    </div>
    {#if learnings}
      <p class='font-bold font-primary mb-2 text-blue'>
        My top learnings
      </p>
      <ul class='font-light font-primary leading-6 text-base tracking-wider list-disc pl-5 mb-6'>

        {@html marked.parse(learnings)}
      </ul>
    {/if}
    {#if awards}
      <p class='font-bold font-primary mb-2 text-blue'>Awards</p>
      <ul class='font-light font-primary leading-6 text-base tracking-wider  tracking-wider list-disc pl-5 mb-6'>

        {@html marked.parse(awards)}
      </ul>
    {/if}
    <a
      class='font-bold font-primary mb-2 text-blue'
      href='mailto:kapeeshmanilal@gmail.com'
    >
      Ask me about this project
    </a>
  </div>
</div>
<style lang='scss'>
    .videoPlayer {
        height: 100%;
        transform: scale(1.01);
    }

    .circleLarge {
        width: 423px;
        height: 423px;
    }

    @media screen and (max-width: 640px) {
        .circleLarge {
            width: 223px;
            height: 223px;
        }
    }
</style>
