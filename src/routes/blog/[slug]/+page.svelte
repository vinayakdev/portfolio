<script>
	import { SEO } from '$lib/components';
	export let data;

	let copied = false;

	function copyLink() {
		navigator.clipboard.writeText(window.location.href);
		copied = true;
		setTimeout(() => (copied = false), 2000);
	}
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
	<p class="text-gray-500 dark:text-gray-400 text-sm">{new Date(data.metadata.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

	<svelte:component this={data.content} />
</article>
<div class="max-w-3xl mt-12 flex justify-end">
	<button
		on:click={copyLink}
		class="text-sm text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors flex items-center gap-1.5"
	>
		<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
			<path stroke-linecap="round" stroke-linejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
		</svg>
		{copied ? 'Copied!' : 'Copy link'}
	</button>
</div>

<nav class="max-w-3xl mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
	{#if data.prev}
		<a
			href="/blog/{data.prev.slug}"
			class="group block rounded-xl border border-gray-200 dark:border-gray-700 p-6 transition-all duration-200 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg"
		>
			<div class="mb-4 w-10 h-10 rounded-full border border-gray-300 dark:border-gray-600 group-hover:border-blue-500 dark:group-hover:border-blue-400 flex items-center justify-center transition-all duration-200 group-hover:-translate-x-1">
				<svg class="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
				</svg>
			</div>
			<h3 class="font-bold text-gray-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 text-base leading-snug line-clamp-1 transition-colors">{data.prev.title}</h3>
			{#if data.prev.description}
				<p class="mt-1 text-sm text-gray-500 dark:text-gray-400 line-clamp-2">{data.prev.description}</p>
			{/if}
		</a>
	{:else}
		<div></div>
	{/if}

	{#if data.next}
		<a
			href="/blog/{data.next.slug}"
			class="group block rounded-xl border border-gray-200 dark:border-gray-700 p-6 transition-all duration-200 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg text-right"
		>
			<div class="mb-4 w-10 h-10 rounded-full border border-gray-300 dark:border-gray-600 group-hover:border-blue-500 dark:group-hover:border-blue-400 flex items-center justify-center ml-auto transition-all duration-200 group-hover:translate-x-1">
				<svg class="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
				</svg>
			</div>
			<h3 class="font-bold text-gray-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 text-base leading-snug line-clamp-1 transition-colors">{data.next.title}</h3>
			{#if data.next.description}
				<p class="mt-1 text-sm text-gray-500 dark:text-gray-400 line-clamp-2">{data.next.description}</p>
			{/if}
		</a>
	{:else}
		<div></div>
	{/if}
</nav>