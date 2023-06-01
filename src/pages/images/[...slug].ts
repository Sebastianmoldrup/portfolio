import type { APIRoute } from 'astro';

export const get: APIRoute = async ({ params }) => {
  const response = await fetch(`${import.meta.env.IMAGE_URL}/${params.slug}`);
  const buffer = Buffer.from(await response.arrayBuffer());

  return new Response(buffer, {
    headers: {
      'content-type':
        'image/' + params.slug?.replace(/.*\.(.*)/, '$1') ?? 'jpg',
      'Cache-Control': 'public, s-maxage=31536000, maxage=31536000',
    },
  });
};
