---
title: "Using Markdown in SvelteKit with mdsvex"
description: "How to integrate markdown content into your SvelteKit applications using mdsvex"
date: "2024-02-10"
keywords: ["sveltekit", "markdown", "mdsvex", "blog", "content management"]
image: "/images/mdsvex-tutorial.jpg"
---

## Why Markdown for Content?

Markdown is the perfect format for content-heavy websites like blogs, documentation, or portfolios. It's:

- **Simple to write**: Focus on content, not formatting
- **Portable**: Works everywhere, from GitHub to your blog
- **Developer-friendly**: Version control, code blocks, and easy editing

## Enter mdsvex

mdsvex is a markdown preprocessor for Svelte that lets you:
- Use Svelte components inside markdown
- Add frontmatter metadata
- Syntax highlight code blocks
- Process markdown as Svelte components

## Installation

First, install mdsvex:

```bash
npm install -D mdsvex
```

Then configure it in `svelte.config.js`:

```javascript
import { mdsvex } from 'mdsvex';

export default {
  extensions: ['.svelte', '.md'],
  preprocess: [
    mdsvex({
      extensions: ['.md']
    })
  ]
};
```

## Creating Markdown Pages

Create a markdown file in your routes directory:

```markdown
---
title: My First Post
date: 2024-02-10
---

## Hello World

This is my first markdown post!
```

## Embedding Components

The real power comes from embedding Svelte components:

```markdown
---
title: Interactive Post
---

## Check this out

<script>
  let count = 0;
</script>

<button on:click={() => count++}>
  Clicked {count} times
</button>
```

## Loading Blog Posts

Use Vite's `import.meta.glob` to load all markdown files:

```typescript
export async function load() {
  const posts = import.meta.glob('/src/posts/*.md');

  const allPosts = await Promise.all(
    Object.entries(posts).map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      return {
        slug: path.split('/').pop().replace('.md', ''),
        ...metadata
      };
    })
  );

  return { posts: allPosts };
}
```

## Frontmatter Best Practices

Keep your frontmatter consistent:

```yaml
---
title: "Post Title"
description: "Brief description for SEO"
date: "2024-02-10"
tags: ["sveltekit", "markdown", "tutorial"]
---
```

## Syntax Highlighting

mdsvex automatically highlights code blocks. Use language identifiers:

````markdown
```javascript
function greet(name) {
  return `Hello, ${name}!`;
}
```
````

## Images in Markdown

Add images the standard markdown way:

```markdown
![Alt text](/images/photo.jpg)
```

Or use Svelte's enhanced image component:

```markdown
<script>
  import { Image } from '$lib/components';
</script>

<Image src="/images/photo.jpg" alt="Description" />
```

## Styling Markdown Content

Style your markdown globally or per-component:

```css
article :global(h2) {
  color: var(--heading-color);
  margin-top: 2rem;
}

article :global(pre) {
  background: #1e1e1e;
  padding: 1rem;
  border-radius: 4px;
}
```

## Conclusion

mdsvex makes it incredibly easy to work with markdown in SvelteKit. Whether you're building a blog, documentation site, or portfolio, it's the perfect tool for content management.

The combination of markdown's simplicity and Svelte's reactivity opens up endless possibilities for interactive, content-rich web applications.
