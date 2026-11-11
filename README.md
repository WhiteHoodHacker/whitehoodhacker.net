# [WhiteHoodHacker.net](https://whitehoodhacker.net)

My personal website and blog, built with Astro, Tailwind CSS, and Markdown/MDX.

## Requirements

- Node.js 22 or newer
- npm

## Development

```sh
npm install
npm run dev
```

The development server runs at `http://localhost:4321`.

## Content

Posts live in `content/posts/`, with each post's Markdown or MDX file and media
in the same directory. Images and other static files live in `public/` and
`src/assets/`.

## Check and Build

```sh
npm run check
npm run build
npm run preview
```

The static site is generated in `dist/`. GitHub Actions checks and builds pull
requests, and deploys `main` to Cloudflare Pages.
