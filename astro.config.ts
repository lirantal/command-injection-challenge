import { fileURLToPath } from 'node:url';
import tutorialkit from '@tutorialkit/astro';
import { defineConfig } from 'astro/config';

export default defineConfig({
  vite: {
    resolve: {
      alias: {
        // TutorialKit 0.1.5 imports Astro internals using this root-relative prefix.
        node_modules: fileURLToPath(new URL('./node_modules', import.meta.url)),
      },
    },
  },
  devToolbar: {
    enabled: false,
  },
  integrations: [tutorialkit()],
});
