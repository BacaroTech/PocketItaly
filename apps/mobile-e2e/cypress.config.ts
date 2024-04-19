import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      bundler: 'vite',
      webServerCommands: {
        default: 'nx run pocket-mobile:start',
        production: 'nx run pocket-mobile:preview',
      },
      ciWebServerCommand: 'nx run pocket-mobile:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
