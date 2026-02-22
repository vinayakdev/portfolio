<script lang="ts">
	import { defaultSEO } from '../seo.config';

	// Props for page-specific SEO (all optional)
	export let title: string | undefined = undefined;
	export let description: string | undefined = undefined;
	export let keywords: string[] | undefined = undefined;
	export let image: string | undefined = undefined;
	export let url: string | undefined = undefined;
	export let article: boolean = false;
	export let publishedTime: string | undefined = undefined;

	// Merge with defaults
	const seo = {
		title: title || defaultSEO.title,
		description: description || defaultSEO.description,
		keywords: keywords || defaultSEO.keywords,
		image: image || defaultSEO.ogImage,
		url: url || defaultSEO.siteUrl,
		author: defaultSEO.author,
		twitterHandle: defaultSEO.twitterHandle
	};

	// Format keywords
	const keywordsString = Array.isArray(seo.keywords)
		? seo.keywords.join(', ')
		: seo.keywords;
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>{seo.title}</title>
	<meta name="title" content={seo.title} />
	<meta name="description" content={seo.description} />
	<meta name="keywords" content={keywordsString} />
	<meta name="author" content={seo.author} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content={article ? 'article' : 'website'} />
	<meta property="og:url" content={seo.url} />
	<meta property="og:title" content={seo.title} />
	<meta property="og:description" content={seo.description} />
	<meta property="og:image" content={seo.image} />

	{#if article && publishedTime}
		<meta property="article:published_time" content={publishedTime} />
	{/if}

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content={seo.url} />
	<meta name="twitter:title" content={seo.title} />
	<meta name="twitter:description" content={seo.description} />
	<meta name="twitter:image" content={seo.image} />
	{#if seo.twitterHandle}
		<meta name="twitter:creator" content={seo.twitterHandle} />
	{/if}

	<!-- Additional -->
	<meta name="robots" content="index, follow" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta charset="UTF-8" />
</svelte:head>
