<script>
	import { SEO } from '$lib/components';
	export let data;
</script>

<SEO
	title="Blog - Your Name | Web Development Tutorials & Insights"
	description="Read my latest blog posts about web development, SvelteKit, JavaScript, CSS, and modern web technologies. Tutorials, guides, and insights for developers."
	keywords={['blog', 'web development', 'tutorials', 'sveltekit', 'javascript', 'css', 'programming']}
/>

<h1 class="text-4xl font-bold mb-4">Blog</h1>

<p class="text-lg text-gray-600 dark:text-gray-400 mb-8">
	Thoughts, tutorials, and insights about web development and technology.
</p>

<div class="space-y-6">
	{#each data.posts as post}
		<a
			href="/blog/{post.slug}"
			class="block bg-gray-100 dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg transition-all hover:-translate-y-1"
		>
			<h3 class="text-2xl font-semibold mb-2">{post.title}</h3>
			<p class="text-sm text-gray-500 dark:text-gray-400 mb-3">{post.date}</p>
			<p class="text-gray-600 dark:text-gray-400">{post.description}</p>
		</a>
	{/each}
</div>
