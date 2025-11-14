import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig(() => ({
  plugins: [react()],
  resolve: {
    alias: {
      '@project/common': resolve(__dirname, '../../library/common/src'),
      '@project/contracts': resolve(__dirname, '../../library/contracts/src'),
      '@project/drizzle': resolve(__dirname, '../../library/drizzle/src'),
      '@project/ponder-config': resolve(__dirname, '../../library/ponder-config/src'),
      '@project/trpc': resolve(__dirname, '../../library/trpc/src')
    }
  },
  server: {
    host: 'localhost',
    port: 4200
  },
  preview: {
    host: 'localhost',
    port: 4300
  },
  build: {
    outDir: '../../dist/apps/main'
  }
}));
