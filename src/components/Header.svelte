<script>
  export let titleColor;
  export let pageTitleColor;
  export let subtitleColor;
</script>

<div class='animated-header relative overflow-hidden mb-6 md:mb-10'>
  {#if $$slots.title}
  <h1 style:color={titleColor} class='font-primary pointer-events-none select-none font-bold'>
    <slot name='title'/>
  </h1>
    {/if}
  <div class='absolute bottom-0'>
    {#if $$slots.pageTitle}
    <h3 style:color={pageTitleColor}
        class='font-primary font-bold font-primary pl-3 md:pl-12 pointer-events-none select-none text-base mb-1 md:mb-0 md:text-2xl'>
      <slot name='pageTitle'/>
    </h3>
    {/if}
    {#if $$slots.subtitle}
    <h4 style:color={subtitleColor}
        class='font-secondary pl-3 text-3xl md:pl-12 left-auto pointer-events-none select-none leading-8 md:leading-none md:tracking-widest sm:text-4xl md:text-6xl font-extrabold relative'>
      <slot name='subtitle'/>
    </h4>
    {/if}
  </div>
</div>

<style lang='scss'>
    .animated-header {
        max-height: 400px;

        &:empty {
            display: none;
        }

        h1 {
            animation: blur 35s infinite alternate-reverse ease-in-out;
            font-size: 17em;
            letter-spacing: -22px;
            color: #fff;
            line-height: 280px;

            @media screen and (max-width: 640px) {
                font-size: 6em;
                letter-spacing: -5px;
                animation: sm-blur 35s infinite alternate-reverse ease-in-out;
                line-height: 180px;
            }
        }

        h3 {
            opacity: 0;
            animation: fade-in 4s ease;
            animation-fill-mode: forwards;
            color: theme('colors.blue');
            @media screen and (max-width: 640px) {
                animation: none;
                opacity: 1;
            }
        }

        h4 {
            bottom: 10px;
            opacity: 0;
            animation: letter-spacing 1s cubic-bezier(0.55, 0.06, 0.68, 0.19);;
            animation-fill-mode: forwards;
            @media screen and (max-width: 640px) {
                animation: none;
                opacity: 1;
            }
        }
    }

    @keyframes blur {
        0% {
            filter: blur(10px);
            transform: translate(-440px, 0);
        }
        50% {
            filter: blur(2px);
        }
        100% {
            filter: blur(10px);
            transform: translate(0, 0);
        }
    }

    @keyframes sm-blur {
        0% {
            filter: blur(3px);
            transform: translate(-440px, 0);
        }
        50% {
            filter: blur(1px);
        }
        100% {
            filter: blur(3px);
            transform: translate(0, 0);
        }
    }

    @keyframes letter-spacing {
        0% {
            opacity: 0;
            letter-spacing: .1em;
        }
        100% {
            opacity: 1;
            letter-spacing: -2px;
        }
    }

    @keyframes fade-in {
        0% {
            opacity: 0;

        }
        100% {
            opacity: 1;
        }
    }
</style>
