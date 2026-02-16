# Portfolio Website

A modern portfolio website built with SvelteKit, featuring a blog powered by markdown files.

## Features

- 🏠 Home page with introduction
- 💼 Projects showcase
- 📝 Markdown-based blog with mdsvex
- 👤 About page
- 🌓 Dark/Light theme toggle with persistence
- 🎨 Styled with Tailwind CSS
- 🔍 Complete SEO system with fallback defaults
- 🚀 Ready for Cloudflare Pages deployment

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Adding Blog Posts

Create new markdown files in `src/posts/` with frontmatter:

```markdown
---
title: "Your Post Title"
description: "Brief description for SEO"
date: "2024-02-16"
keywords: ["keyword1", "keyword2"]
image: "/images/post-cover.jpg"
---

Your content here...
```

## SEO Configuration

The site includes a complete SEO system:

- **Default SEO**: Edit `src/lib/seo.config.ts` for site-wide defaults
- **Page-specific SEO**: Each page can override defaults
- **Blog post SEO**: Automatically extracted from frontmatter
- **Social media tags**: Open Graph and Twitter Cards included

See [SEO-GUIDE.md](./SEO-GUIDE.md) for detailed instructions.

## Theme System

The site includes a dark/light theme toggle:

- **Theme toggle**: Click the button in the navigation to switch themes
- **Automatic persistence**: Theme preference saved to localStorage
- **System preference**: Respects `prefers-color-scheme` on first visit
- **Tailwind dark mode**: Use `dark:` prefix for dark mode styles

See [THEME-GUIDE.md](./THEME-GUIDE.md) for detailed instructions.

## Deployment

This project is configured for Cloudflare Pages. Push to GitHub and connect your repository to Cloudflare Pages.

Build settings:
- Build command: `npm run build`
- Build output: `.svelte-kit/cloudflare`
