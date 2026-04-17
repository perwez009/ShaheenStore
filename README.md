# ShaheenStore

ShaheenStore is a modern ecommerce storefront for clothing, tech accessories, college essentials, and neuroscience/BCI-inspired merchandise.

## Features

- Vibrant homepage with category sections and featured products
- Category pages for Clothing, Tech, College, and Neuroscience/BCI
- Static export setup for GitHub Pages deployment
- Responsive UI built with Next.js App Router + Tailwind CSS

## Local Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production Build (GitHub Pages)

Generate the static site output:

```bash
npm run build
```

Build files are exported to the `docs/` folder and are ready to publish with GitHub Pages.

## Deployment

This repository is configured for GitHub Pages using:

- Branch: `main`
- Folder: `/docs`

After changes:

```bash
git add .
git commit -m "Update store site"
git push
```
