// apps/web/tailwind.config.ts
import type { Config } from 'tailwindcss';
// Assuming the shared config is correctly set up for presets
const sharedConfig = require('../../packages/config/tailwind.config.ts');

const config: Config = {
  // Use presets to extend the shared config
  presets: [sharedConfig],
  content: [
    // Include paths for app directory components and pages
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}', // Include if using pages dir
    './components/**/*.{js,ts,jsx,tsx,mdx}', // Include if using components dir

    // IMPORTANT: Include path to the shared UI package
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // Add any web-specific theme extensions here
    },
  },
  plugins: [
     // Add any web-specific plugins here
  ],
};
export default config;