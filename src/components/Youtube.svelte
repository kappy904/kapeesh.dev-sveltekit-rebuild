<script>
  export let title;
  export let videoUrl;
  export let description;
</script>


<div class='flex container mx-auto flex-col md:flex-row justify-center'>
  <div class='flex-auto md:mx-8'>
    <iframe
      title={title}
      class='px-3'
      width='538'
      height='289'
      src={videoUrl}
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      allowFullScreen></iframe>
  </div>
  <div class='px-3 pt-5 content-wrapper'>
    <h2 class='font-secondary tracking-tighter text-2xl leading-5 md:text-3xl text-lg mb-4 font-extrabold text-blue leading-8'>
      {title}
    </h2>
    <p class='font-light font-primary text-base leading-6 tracking-wider mb-6'>
      {description}
    </p>
  </div>
</div>
