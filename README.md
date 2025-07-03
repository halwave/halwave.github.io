# halwave.github.io

A personal portfolio website for myself that is built with Vite, React, and Tailwind CSS. It is deployed via GitHub Pages. I figured the old website (originally with vanilla HTML/CSS/JS) could use a touch-up!

## 🚀 Project Overview

This is a modular, mobile-friendly portfolio site designed to showcase projects, experience, interests, and more. The site features a retro/vaporwave/retrowave aesthetic and is easy to curate and update.

## 🛠️ Tech Stack

- [Vite](https://vitejs.dev/) (build tool)
- [React](https://react.dev/) (UI library)
- [TypeScript](https://www.typescriptlang.org/) (type safety)
- [Tailwind CSS](https://tailwindcss.com/) (utility-first CSS)
- [GitHub Pages](https://pages.github.com/) (deployment)

## 📦 Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Install dependencies

```bash
npm install
```

### Run locally (development)

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for production

```bash
npm run build
```

### Preview production build locally

```bash
npm run preview
```

## 🚢 Deploy to GitHub Pages

1. Build the site:
   ```bash
   npm run build
   ```
2. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```
   This uses the `gh-pages` package to push the contents of the `dist` folder to the `gh-pages` branch.

**To push manually as a specific user:**

```bash
git push https://halwave@github.com/halwave/halwave.github.io.git main
```

## 📁 Project Structure

- `/src` – React components and app logic
- `/public` – Static assets (images, etc.)
- `/dist` – Production build output (auto-generated)
- `vite.config.js` – Vite configuration
- `tailwind.config.js` – Tailwind CSS configuration

## ✨ Features

- Modular, component-based architecture
- Retro/vaporwave/retrowave design
- Responsive and mobile-friendly
- Easy to update content
- Ready for GitHub Pages deployment

## 📄 License

[MIT](LICENSE)

## 🙏 Acknowledgements

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [GitHub Pages](https://pages.github.com/)
