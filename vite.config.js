import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // vite.config.js

  // other configurations
  base: '/ozemoya.github.io/', // replace 'your-repo-name' with your repository name
  build: {
    outDir: 'dist',
  },
});
