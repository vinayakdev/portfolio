<script>
	import { SEO } from '$lib/components';
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	export let data;

	onMount(() => {
		const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 0.15, clearProps: 'all' } });

		tl.from('.page-title', { y: 20, opacity: 0 })
		  .from('.page-desc', { y: 15, opacity: 0 }, '-=0.05')
		  .from('.blog-post', { y: 25, opacity: 0, stagger: 0.04 }, '-=0.05');
	});
</script>

<SEO
	title="Blog - Vinayak Dev | Web Development Tutorials & Insights"
	description="Read my latest blog posts about web development, SvelteKit, JavaScript, CSS, and modern web technologies. Tutorials, guides, and insights for developers."
	keywords={['blog', 'web development', 'tutorials', 'sveltekit', 'javascript', 'css', 'programming']}
/>

<h1 class="page-title text-4xl font-bold mb-4">Blog</h1>

<p class="page-desc text-lg text-gray-600 dark:text-gray-400 mb-8">
	Thoughts, tutorials, and insights about web development and technology.
</p>

<div class="space-y-6">
	{#each data.posts as post}
		<a
			href="/blog/{post.slug}"
			class="blog-post block bg-gray-100 dark:bg-surface-elevated p-6 rounded-lg hover:shadow-lg transition-all hover:-translate-y-1"
		>
			<h3 class="text-2xl font-semibold mb-2">{post.title}</h3>
			<p class="text-sm text-gray-500 dark:text-gray-400 mb-3">{post.date}</p>
			<p class="text-gray-600 dark:text-gray-400">{post.description}</p>
		</a>
	{/each}
</div>
