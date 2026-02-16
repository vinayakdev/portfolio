# SEO Implementation Guide

This portfolio uses a flexible SEO system that provides default metadata while allowing page-specific overrides.

## How It Works

### 1. Default SEO (`src/lib/seo.config.ts`)

Contains site-wide default SEO metadata:
- Site title
- Default description
- Keywords
- Author
- Social media handles
- Default Open Graph image

**Update this file to customize your default SEO.**

### 2. SEO Component (`src/lib/components/SEO.svelte`)

Reusable component that handles all SEO meta tags:
- Primary meta tags (title, description, keywords)
- Open Graph tags (Facebook, LinkedIn)
- Twitter Card tags
- Article metadata (for blog posts)

### 3. Usage

#### Static Pages (Home, Projects, About, Blog List)

Import and use the SEO component with custom props:

```svelte
<script>
  import { SEO } from '$lib/components';
</script>

<SEO
  title="Custom Page Title"
  description="Custom description for this page"
  keywords={['keyword1', 'keyword2']}
/>
```

#### Blog Posts (Dynamic Routes)

Blog posts automatically use SEO from their frontmatter:

```markdown
---
title: "Post Title"
description: "Post description for SEO"
date: "2024-02-16"
keywords: ["sveltekit", "tutorial"]
image: "/images/post-cover.jpg"
---
```

The `src/routes/blog/[slug]/+page.svelte` automatically extracts this metadata and passes it to the SEO component.

## Adding SEO to New Pages

### For Static Pages:

```svelte
<script>
  import { SEO } from '$lib/components';
</script>

<SEO
  title="Page Title - Your Name"
  description="Description of this page"
  keywords={['relevant', 'keywords']}
/>

<!-- Your page content -->
```

### For New Blog Posts:

Create a markdown file in `src/posts/` with frontmatter:

```markdown
---
title: "Your Post Title"
description: "SEO description (150-160 characters)"
date: "2024-02-16"
keywords: ["keyword1", "keyword2", "keyword3"]
image: "/images/your-post-image.jpg"
---

Your content here...
```

## SEO Component Props

All props are optional and will fall back to defaults from `seo.md`:

- `title` - Page title (appears in browser tab and search results)
- `description` - Meta description (shown in search results)
- `keywords` - Array of keywords
- `image` - Open Graph image (for social media sharing)
- `url` - Canonical URL
- `article` - Set to `true` for blog posts
- `publishedTime` - Publication date (ISO format)

## Best Practices

1. **Unique Titles**: Each page should have a unique, descriptive title
2. **Description Length**: Keep descriptions between 150-160 characters
3. **Keywords**: Use 3-7 relevant keywords per page
4. **Images**: Use high-quality images (1200x630px for Open Graph)
5. **Consistency**: Follow the pattern "Page Name - Your Name | Role"

## Testing SEO

### Check Meta Tags:
1. Run the dev server: `npm run dev`
2. View any page
3. Right-click → View Page Source
4. Look for `<meta>` tags in the `<head>` section

### Test Social Sharing:
- **Facebook**: https://developers.facebook.com/tools/debug/
- **Twitter**: https://cards-dev.twitter.com/validator
- **LinkedIn**: Share a link and see the preview

## Updating Default SEO

Edit `src/lib/seo.config.ts`:

```typescript
export const defaultSEO = {
	title: "Your Name - Your Title",
	description: "Your default site description",
	keywords: ["your", "default", "keywords"],
	author: "Your Name",
	siteUrl: "https://yoursite.com",
	ogImage: "/images/og-default.jpg",
	twitterHandle: "@yourhandle"
};
```

This applies to all pages that don't specify custom SEO props.

## Fallback Behavior

The SEO system uses a fallback chain:

```
Page-Specific Props → Default from seo.config.ts
```

If a page doesn't specify SEO, it uses the defaults.
If it does, page-specific values override defaults.
