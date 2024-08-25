import { defineConfig } from 'vite';
import path from 'path';
import http from 'http';

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    {
      name: 'configure-server',
      configureServer(server) {
        const app = http.createServer();
        
        server.httpServer = app;

        return async () => {
          const { default: expressApp } = await import('./server/app.js');
          app.on('request', expressApp);
        };
      },
    },
  ],
  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), './src'),
    },
  },
});