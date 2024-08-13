import { defineConfig, passthroughImageService } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://remiwi.github.io',
  base: '/portfolio-v2',
  image: {
    service: passthroughImageService(),
  },
});
