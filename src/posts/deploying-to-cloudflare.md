---
title: "Deploying SvelteKit to Cloudflare Pages"
description: "A step-by-step guide to deploying your SvelteKit application to Cloudflare Pages"
date: "2024-02-15"
keywords: ["sveltekit", "cloudflare", "deployment", "cloudflare pages", "hosting"]
image: "/images/cloudflare-deployment.jpg"
---

## Why Cloudflare Pages?

Cloudflare Pages is an excellent platform for deploying static sites and SvelteKit applications:

- **Global CDN**: Lightning-fast delivery worldwide
- **Free tier**: Generous free tier for personal projects
- **Git integration**: Automatic deployments from GitHub
- **Edge functions**: Run serverless functions at the edge
- **Zero configuration**: Works out of the box with SvelteKit

## Prerequisites

Before we begin, make sure you have:
- A SvelteKit project
- A GitHub account
- A Cloudflare account (free tier is fine)

## Step 1: Install the Cloudflare Adapter

First, install the official Cloudflare adapter:

```bash
npm install -D @sveltejs/adapter-cloudflare
```

Update your `svelte.config.js`:

```javascript
import adapter from '@sveltejs/adapter-cloudflare';

export default {
  kit: {
    adapter: adapter()
  }
};
```

## Step 2: Push to GitHub

Make sure your code is in a GitHub repository:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/your-repo.git
git push -u origin main
```

## Step 3: Connect to Cloudflare Pages

1. Log in to your Cloudflare dashboard
2. Navigate to Pages
3. Click "Create a project"
4. Connect your GitHub account
5. Select your repository

## Step 4: Configure Build Settings

Cloudflare should auto-detect SvelteKit, but verify these settings:

- **Build command**: `npm run build`
- **Build output directory**: `.svelte-kit/cloudflare`
- **Node version**: 18 or higher

## Step 5: Deploy!

Click "Save and Deploy". Cloudflare will:
1. Clone your repository
2. Install dependencies
3. Build your project
4. Deploy to their global CDN

Your site will be live in minutes!

## Custom Domains

To use a custom domain:

1. Go to your Pages project
2. Click "Custom domains"
3. Add your domain
4. Update DNS records as instructed

Cloudflare provides free SSL certificates automatically.

## Environment Variables

For sensitive data, use environment variables:

1. Go to Settings → Environment variables
2. Add your variables (e.g., `API_KEY`)
3. Redeploy your site

Access them in your code:

```typescript
import { env } from '$env/dynamic/private';

const apiKey = env.API_KEY;
```

## Automatic Deployments

Every push to your main branch triggers a new deployment. For preview deployments, push to a different branch.

## Performance Tips

Optimize your Cloudflare Pages deployment:

1. **Enable caching**: Cloudflare caches static assets automatically
2. **Minify assets**: SvelteKit handles this during build
3. **Use edge functions**: For dynamic content at the edge
4. **Enable HTTP/3**: Available in Cloudflare settings

## Monitoring

Monitor your deployment:
- Check build logs in the Cloudflare dashboard
- Use Cloudflare Analytics for visitor insights
- Set up alerts for build failures

## Common Issues

### Build Failures

If builds fail, check:
- Node version compatibility
- All dependencies are in `package.json`
- Build command is correct

### Environment Variables

Remember:
- Prefix client-side variables with `PUBLIC_`
- Rebuild after adding new variables
- Different variables for production/preview

## Conclusion

Deploying to Cloudflare Pages is straightforward and provides excellent performance. With automatic deployments, global CDN, and generous free tier, it's perfect for SvelteKit applications.

Your portfolio or blog will load fast anywhere in the world, and you can focus on building great content instead of managing infrastructure.

Happy deploying! 🚀
