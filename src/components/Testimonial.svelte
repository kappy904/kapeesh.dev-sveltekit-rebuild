<div class='testimonial container m-auto flex mb-10 md:mb-40 items-center flex-col md:flex-row px-3 md:p-0'>
  <picture
    class='flex-shrink-0 relative block w-2/5 md:w-1/4 relative my-3 md:mr-20 md:w-1/6 pointer-events-none select-none'>
    {#if $$slots.testimonialImage}
      <slot name='testimonialImage' />
    {/if}
  </picture>
  <div>
    <h2 class='font-secondary tracking-tighter leading-6 md:text-3xl text-2xl mb-2 font-extrabold'>
      {#if $$slots.testimonialName}
        <slot name='testimonialName' />
      {/if}
    </h2>
    <h3 class='font-bold font-primary mb-6'>
      {#if $$slots.testimonialTitle}
        <slot name='testimonialTitle' />
      {/if}
    </h3>
    <p class='font-light font-primary text-base leading-6 tracking-wider'>
      {#if $$slots.testimonialBlurb}
        <slot name='testimonialBlurb' />
      {/if}
    </p>
    <div class="flex flex-row mt-6 font-bold font-primary pr-8">
      {#if $$slots.testimonialLinks}
        <slot name='testimonialLinks' />
      {/if}
    </div>
  </div>
</div>
