import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'travel-sample-ionic',
  webDir: 'dist',
  'plugins': {
    'cblite-ionic': {}
  }
};

export default config;
