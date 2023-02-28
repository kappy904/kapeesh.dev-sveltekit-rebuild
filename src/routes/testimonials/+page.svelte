<script>
  import Header from '../../components/Header.svelte';
  import Testimonial from '../../components/Testimonial.svelte';

  export let data;
  const { testimonials, mentees } = data;
</script>

<svelte:head>
  <title>Testimonials | Kapeesh.dev</title>
  <meta name='description' content='What my colleagues and mentees have shared' />
</svelte:head>

<Header titleColor='rgb(125 116 190 / 11%)' pageTitleColor='rgb(21, 0, 158)' subtitleColor='#5a1f9f'>
  <svelte:fragment slot='title'>TestimonialsMentorshipTestimonialsMentorshipTestimonialsMentorshipTestimonialsMentorship</svelte:fragment>
  <svelte:fragment slot='pageTitle'>Testimonials</svelte:fragment>
  <svelte:fragment slot='subtitle'>Learning Together</svelte:fragment>
</Header>
{#each testimonials as testimonial}
  <Testimonial>
    <svelte:fragment slot='testimonialImage'>
      <source type='image/webp' srcset={testimonial?.fields.image?.fields.file.url}>
      <img class='rounded-full' alt='testimonial image' src={testimonial?.fields.image?.fields.file.url}>
    </svelte:fragment>
    <svelte:fragment slot='testimonialName'>{testimonial?.fields.name}</svelte:fragment>
    <svelte:fragment slot='testimonialTitle'>{testimonial?.fields.title}</svelte:fragment>
    <svelte:fragment slot='testimonialBlurb'>{testimonial?.fields.blurb}</svelte:fragment>
    <svelte:fragment slot='testimonialLinks'>
      <a class='font-bold font-primary pr-8' target='_blank' rel='noreferrer'
         href={testimonial?.fields.link}>Check out {testimonial?.fields.name}'s profile</a>
    </svelte:fragment>
  </Testimonial>
{/each}

<Header titleColor='rgb(125 116 190 / 11%)' pageTitleColor='rgb(21, 0, 158)' subtitleColor='#5a1f9f'>
  <svelte:fragment slot='title'>MenteesMenteesMenteesMenteesMenteesMenteesMenteesMenteesMenteesMentees</svelte:fragment>
  <svelte:fragment slot='pageTitle'>Mentees</svelte:fragment>
</Header>

{#each mentees as mentee}
  <Testimonial>
    <svelte:fragment slot='testimonialImage'>
      <source type='image/webp' srcset={mentee?.fields.image?.fields.file.url}>
      <img class='rounded-full' alt='testimonial image' src={mentee?.fields.image?.fields.file.url}>
    </svelte:fragment>
    <svelte:fragment slot='testimonialName'> {mentee?.fields.name}</svelte:fragment>
    <svelte:fragment slot='testimonialTitle'>{mentee?.fields.title}</svelte:fragment>
    <svelte:fragment slot='testimonialBlurb'>{mentee?.fields.blurb}</svelte:fragment>
    <svelte:fragment slot='testimonialLinks'>
      <a class='font-bold font-primary pr-8' target='_blank' rel='noreferrer'
         href={mentee?.fields.link}>Check out {mentee?.fields.name}'s profile</a>
    </svelte:fragment>
  </Testimonial>
{/each}
