import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'yarn nx run poc-angular-ci-cd:serve',
        production: 'yarn nx run poc-angular-ci-cd:serve-static',
      },
      ciWebServerCommand: 'yarn nx run poc-angular-ci-cd:serve-static',
      ciBaseUrl: 'http://localhost:4200',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
