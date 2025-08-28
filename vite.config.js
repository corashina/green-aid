import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false, // Disable sourcemaps in production
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
  // Uncomment and set this if deploying to a subdirectory
  // base: '/your-repo-name/',
  
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
  
  // Server configuration for development
  server: {
    port: 3000,
    open: true,
  },
  
  // Preview configuration for testing builds
  preview: {
    port: 4173,
    open: true,
  },
})

