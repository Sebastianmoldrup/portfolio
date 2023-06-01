import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import vercelEdge from '@astrojs/vercel/edge';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

// https://docs.astro.build/en/guides/integrations-guide/sitemap/
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), tailwind(), mdx(), sitemap()],
  output: 'server',
  adapter: vercelEdge(),
});
