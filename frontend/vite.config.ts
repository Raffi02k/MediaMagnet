import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

function nonBlockingCss(): Plugin {
  return {
    name: 'non-blocking-css',
    apply: 'build',
    transformIndexHtml: {
      order: 'post',
      handler(html) {
        return html.replace(/<link rel="stylesheet"([^>]+)>/g, (_match, attributes: string) => {
          return `<link rel="preload" as="style"${attributes} onload="this.onload=null;this.rel='stylesheet'"><noscript><link rel="stylesheet"${attributes}></noscript>`;
        });
      }
    }
  };
}

export default defineConfig({
  plugins: [react(), nonBlockingCss()],
  server: {
    port: 5173,
    strictPort: false,
    host: '0.0.0.0'
  }
});
