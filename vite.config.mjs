import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import mockServer from 'vite-plugin-mock-server';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    mockServer({
      logLevel: 'info',
      urlPrefixes: ['/api/'],
      mockJsSuffix: '.mock.mjs',
      middlewares: [
        cookieParser(),
        bodyParser.json(),
      ],
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@modules': path.resolve(__dirname, './src/modules'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});