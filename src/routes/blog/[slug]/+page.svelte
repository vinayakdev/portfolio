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
