# Andover Digital

The website for Andover Digital, a small web and automation business I started. It is a single-page React app with five pages: Home, Services, About, Pricing and Contact. The idea was automation for local businesses: faster replies, cleaner operations, less repetitive work.

This repo is kept as a record of the build. I am not actively working on it.

## Tech stack

React 19, TypeScript, Vite, Tailwind CSS 3 and Framer Motion.

## Running it

```bash
npm install
npm run dev      # local dev server
npm run build    # production build into dist/
```

## How it is built

All the pages live in `src/App.tsx`. The page is switched with React state, so there is no router. Styling is Tailwind plus a few colors defined at the top of the file. The logo and headshot are in `public/`.

## Author

Sansar Karki, [github.com/Sansar-Karki](https://github.com/Sansar-Karki)
