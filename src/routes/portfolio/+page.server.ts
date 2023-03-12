import { client } from '$lib/contentfulClient';

export async function load() {
  const portfolios = await client
    .getEntries({ content_type: "portfolio" })
    .then((response) => response.items);

  const clientLogos = await client
    .getEntries({ content_type: "clientLogo" })
    .then((response) => response.items);

  if (portfolios && clientLogos) {
    return {
      portfolios,
      clientLogos,
    };
  }

  return {
    status: 404
  };
}
