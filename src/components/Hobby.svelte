<script>
  export let title;
  export let description;
  export let images;
</script>


<div class='flex container mx-auto flex-col-reverse md:flex-row justify-center items-center -mt-10'>
  <div class='contentWrapper px-3 pt-5'>
    <h2 class='font-secondary tracking-tighter text-2xl leading-5 md:text-3xl text-lg mb-4 font-extrabold text-blue leading-8'>
      {title}
    </h2>
    <p class='font-light font-primary text-base leading-6 tracking-wider mb-6'>
      {description}
    </p>
  </div>
  <div class='aboutCirclesB flex-auto md:mx-8 relative about-circles-b max-w-3xl'>
    {#each images as image}
      <picture>
        <source type='image/avif' srcset={image?.url} />
        <img
          class='bg-purple block rounded-full relative object-cover'
          src={image?.url}
          alt={image?.fileName}
        />
      </picture>
    {/each}
  </div>
</div>

<style lang='scss'>
    .aboutCirclesB picture {
        display: block;
        flex: none;
    }

    .aboutCirclesB picture:nth-child(1) img {
        left: -170px;
        top: 90px;
        width: 210px;
        height: 210px;
    }

    @media screen and (max-width: 640px) {
        .aboutCirclesB picture:nth-child(1) img {
            left: 0;
        }
    }

    .aboutCirclesB picture:nth-child(2) img {
        width: 323px;
        height: 323px;
    }

    @media screen and (max-width: 640px) {
        .aboutCirclesB picture:nth-child(2) img {
            left: 50px;
            width: 273px;
            height: 263px;
        }
    }

    .aboutCirclesB picture:nth-child(3) img {
        left: -150px;
        width: 289px;
        height: 289px;
        top: -30px;
    }

    @media screen and (max-width: 640px) {
        .aboutCirclesB picture:nth-child(3) img {
            left: 0;
            top: -80px;
        }
    }

    @media screen and (min-width: 768px) {
        .contentWrapper {
            max-width: 50%;
        }
    }

    @media screen and (min-width: 1024px) {
        .contentWrapper {
            max-width: 60%;
        }
    }

    @media screen and (min-width: 1280px) {
        .contentWrapper {
            max-width: 65%;
        }
    }

    .rounded-full {
        border-radius: 50%;
    }
</style>
