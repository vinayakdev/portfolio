<script>
	import { SEO } from '$lib/components';
	export let data;
</script>

<SEO
	title={`${data.metadata.title} - Vinayak Dev Blog`}
	description={data.metadata.description}
	keywords={data.metadata.keywords}
	image={data.metadata.image}
	article={true}
	publishedTime={data.metadata.date}
/>

<article class="max-w-3xl prose prose-lg dark:prose-invert prose-headings:font-bold prose-a:text-blue-500 dark:prose-a:text-blue-400 prose-pre:bg-gray-800 prose-pre:text-gray-100 prose-code:text-blue-600 dark:prose-code:text-blue-400">
	<h1>{data.metadata.title}</h1>
	<p class="text-gray-500 dark:text-gray-400 text-sm">{data.metadata.date}</p>

	<svelte:component this={data.content} />
</article>
<nav class="max-w-3xl mt-12 flex flex-col gap-4">
	{#if data.prev}
		<a href="/blog/{data.prev.slug}" class="group flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
			<svg class="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
				<path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
			</svg>
			<span class="text-sm">{data.prev.title}</span>
		</a>
	{:else}
		<div></div>
	{/if}

	{#if data.next}
		<a href="/blog/{data.next.slug}" class="group flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors self-end">
			<span class="text-sm">{data.next.title}</span>
			<svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
				<path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
			</svg>
		</a>
	{/if}
</nav>