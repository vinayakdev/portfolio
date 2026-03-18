<script>
	import { SEO } from '$lib/components';
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	export let data;

	onMount(() => {
		const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 0.15, clearProps: 'all' } });

		tl.from('.page-title', { y: 20, opacity: 0 })
		  .from('.page-desc', { y: 15, opacity: 0 }, '-=0.05')
		  .from('.project-card', { y: 20, opacity: 0, stagger: 0.05 }, '-=0.05');
	});
</script>

<SEO
	title="Projects - Vinayak Dev | Backend Engineer"
	description="In-depth case studies of production systems built by Vinayak Dev - covering architecture decisions, scaling challenges, and engineering trade-offs."
	keywords={['projects', 'portfolio', 'laravel', 'backend', 'system design', 'case study']}
/>

<h1 class="page-title text-4xl font-bold mb-4">Projects</h1>

<p class="page-desc text-lg text-gray-600 dark:text-gray-400 mb-8">
	Production systems I've built — architecture decisions, scaling challenges, and the engineering thinking behind them.
</p>

<div class="space-y-4">
	{#each data.projects as project}
		<a
			href="/projects/{project.slug}"
			class="project-card group flex gap-4 bg-gray-100 dark:bg-surface-elevated rounded-xl overflow-hidden hover:shadow-lg transition-all hover:-translate-y-0.5 p-4"
		>
			<div class="w-32 h-20 shrink-0 rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-700">
				{#if project.image}
					<img
						src={project.image}
						alt={project.title}
						class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
					/>
				{:else}
					<div class="w-full h-full flex items-center justify-center text-gray-400 dark:text-gray-500 text-xs text-center px-2">
						Image coming soon
					</div>
				{/if}
			</div>
			<div class="flex flex-col justify-center min-w-0">
				<h2 class="text-lg font-bold leading-snug mb-1 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors truncate">{project.title}</h2>
				<p class="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-2">{project.description}</p>
				<div class="flex flex-wrap gap-1.5">
					{#each project.tech as tag}
						<span class="text-xs px-2 py-0.5 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300">{tag}</span>
					{/each}
				</div>
			</div>
		</a>
	{/each}
</div>
