import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {}
  },
  daisyui: { // Add Daisy UI themes if wanted
    themes: [],
  },
  plugins: [
    require('daisyui'),
  ],
};
export default config;
