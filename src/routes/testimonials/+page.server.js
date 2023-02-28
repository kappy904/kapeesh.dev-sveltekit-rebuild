import { client } from '$lib/contentfulClient';

export async function load() {
  const testimonials = await client
    .getEntries({ content_type: 'testimonial' }).then((response) => response.items);

  const mentees = await client
    .getEntries({ content_type: "mentees" }).then((response) => response.items);

  if (testimonials && mentees) {
    return {
        testimonials,
        mentees,
    };
  }
  return {
    status: 404
  };

}

