import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import svelte from '@astrojs/svelte'
import 'dotenv/config'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte()],
  /**
   * need this to get searchParams in APIRoute
   */
  output: 'server',
})
