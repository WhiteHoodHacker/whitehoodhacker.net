import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import type { AstroIntegration } from 'astro';
import { defineConfig, fontProviders } from 'astro/config';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const contentDir = path.resolve(import.meta.dirname, 'content/posts');
const mediaExtensions = new Set([
  '.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg',
  '.wav', '.mp3', '.mp4', '.webm',
]);
const mimeTypes: Record<string, string> = {
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png',
  '.gif': 'image/gif', '.webp': 'image/webp', '.svg': 'image/svg+xml',
  '.wav': 'audio/wav', '.mp3': 'audio/mpeg', '.mp4': 'video/mp4',
  '.webm': 'video/webm',
};

/**
 * Handles co-located post assets (images, audio, video):
 * - Dev: serves files from content/posts/ via middleware
 * - Build: copies media to dist/posts/ and rewrites relative src paths
 *   to absolute paths in HTML (so they work without trailing slashes)
 */
function postAssets(): AstroIntegration {
  return {
    name: 'post-assets',
    hooks: {
      'astro:server:setup': ({ server }) => {
        server.middlewares.use((req, res, next) => {
          const url = req.url;
          if (!url?.startsWith('/posts/')) return next();

          const relative = url.slice('/posts/'.length);
          const ext = path.extname(relative).toLowerCase();
          if (!mediaExtensions.has(ext)) return next();

          const filePath = path.join(contentDir, relative);
          if (!fs.existsSync(filePath)) return next();

          res.setHeader('Content-Type', mimeTypes[ext] || 'application/octet-stream');
          fs.createReadStream(filePath).pipe(res);
        });
      },

      'astro:build:done': async ({ dir }) => {
        const outDir = fileURLToPath(dir);
        let copied = 0;

        // 1. Copy media assets from content/posts/ to dist/posts/
        function copyAssets(srcDir: string) {
          for (const entry of fs.readdirSync(srcDir, { withFileTypes: true })) {
            const srcPath = path.join(srcDir, entry.name);
            if (entry.isDirectory()) {
              copyAssets(srcPath);
            } else {
              const ext = path.extname(entry.name).toLowerCase();
              if (mediaExtensions.has(ext)) {
                const relative = path.relative(contentDir, srcPath);
                const destPath = path.join(outDir, 'posts', relative);
                fs.mkdirSync(path.dirname(destPath), { recursive: true });
                fs.copyFileSync(srcPath, destPath);
                copied++;
              }
            }
          }
        }
        copyAssets(contentDir);

        // 2. Rewrite relative src="./..." to absolute paths in post HTML
        const postsDir = path.join(outDir, 'posts');
        for (const entry of fs.readdirSync(postsDir, { withFileTypes: true })) {
          if (!entry.isDirectory()) continue;
          const htmlPath = path.join(postsDir, entry.name, 'index.html');
          if (!fs.existsSync(htmlPath)) continue;

          const slug = entry.name;
          let html = fs.readFileSync(htmlPath, 'utf-8');
          const rewritten = html.replace(
            /src="\.\/([^"]+)"/g,
            `src="/posts/${slug}/$1"`
          );
          if (rewritten !== html) {
            fs.writeFileSync(htmlPath, rewritten, 'utf-8');
          }
        }

        console.log(`[post-assets] Copied ${copied} media files to dist/posts/`);
      },
    },
  };
}

export default defineConfig({
  site: 'https://whitehoodhacker.net',
  output: 'static',
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.includes('/wp-admin'),
    }),
    postAssets(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Inconsolata',
      cssVariable: '--font-inconsolata',
      weights: ['200 900'],
      styles: ['normal'],
      fallbacks: ['Consolas', 'Courier New', 'monospace'],
    },
  ],
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'one-dark-pro',
      },
    },
  },
});
