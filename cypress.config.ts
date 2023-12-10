import { defineConfig } from 'cypress';
import webpack from '@cypress/webpack-preprocessor';
import webpackconfig from './.erb/configs/webpack.config.base';

export default defineConfig({
  projectId: '8qxzr5',
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', webpack(webpackconfig));
    },
    supportFile: 'cypress/support/commands.ts',
  },
});
