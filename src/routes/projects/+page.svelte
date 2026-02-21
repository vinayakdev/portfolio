<script>
	import { SEO } from '$lib/components';
	import { onMount } from 'svelte';
	import gsap from 'gsap';

	onMount(() => {
		const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 0.15, clearProps: 'all' } });

		tl.from('.page-title', { y: 20, opacity: 0 })
		  .from('.page-desc', { y: 15, opacity: 0 }, '-=0.05')
		  .from('.project-card', { y: 25, opacity: 0, stagger: 0.04 }, '-=0.05');
	});
</script>

<SEO
	title="Projects - Vinayak Dev | Portfolio"
	description="Explore projects by Vinayak Dev including SaaS platforms, eCommerce solutions, and custom web applications built with Laravel, Livewire, and modern web technologies."
	keywords={['projects', 'portfolio', 'laravel', 'livewire', 'ecommerce', 'saas', 'web development']}
/>

<h1 class="page-title text-4xl font-bold mb-4">My Projects</h1>

<p class="page-desc text-lg text-gray-600 dark:text-gray-400 mb-8">
	A mix of professional work, side projects, and freelance builds. Each one taught me something new.
</p>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
	<div class="project-card bg-gray-100 dark:bg-surface-elevated p-6 rounded-lg hover:shadow-lg transition-shadow">
		<h3 class="text-xl font-semibold mb-2">Keralamatrimonialguide</h3>
		<p class="text-sm font-medium text-blue-500 dark:text-blue-400 mb-2">Laravel, PWA, Payment APIs</p>
		<p class="text-gray-600 dark:text-gray-400 mb-4">
			Matrimonial service platform built from scratch, scaled to 3000+ active users with payment gateway integrations and API webhooks. Currently building a PWA for push notifications and a native mobile experience.
		</p>
	</div>

	<div class="project-card bg-gray-100 dark:bg-surface-elevated p-6 rounded-lg hover:shadow-lg transition-shadow">
		<h3 class="text-xl font-semibold mb-2">Catering Menu Manager</h3>
		<p class="text-sm font-medium text-blue-500 dark:text-blue-400 mb-2">Laravel, Livewire, PDF Generation</p>
		<p class="text-gray-600 dark:text-gray-400 mb-4">
			Comprehensive menu management software handling complex versioning, relational data structures, and automated PDF generation — reducing menu preparation time significantly.
		</p>
	</div>

	<div class="project-card bg-gray-100 dark:bg-surface-elevated p-6 rounded-lg hover:shadow-lg transition-shadow">
		<h3 class="text-xl font-semibold mb-2">Recipe Learning System</h3>
		<p class="text-sm font-medium text-blue-500 dark:text-blue-400 mb-2">Laravel, JavaScript, Interactive UI</p>
		<p class="text-gray-600 dark:text-gray-400 mb-4">
			Interactive cooking recipe learning platform for a private enterprise with extensive JavaScript frontend integration for seamless user engagement.
		</p>
	</div>

	<div class="project-card bg-gray-100 dark:bg-surface-elevated p-6 rounded-lg hover:shadow-lg transition-shadow">
		<h3 class="text-xl font-semibold mb-2">eCommerce & SaaS Projects</h3>
		<p class="text-sm font-medium text-blue-500 dark:text-blue-400 mb-2">TALL Stack, Reusable Templates</p>
		<p class="text-gray-600 dark:text-gray-400 mb-4">
			Multiple eCommerce and SaaS applications built at ArtWorksIt using reusable starter kits to deliver feature-rich apps in minimal production time.
		</p>
	</div>

	<div class="project-card bg-gray-100 dark:bg-surface-elevated p-6 rounded-lg hover:shadow-lg transition-shadow">
		<h3 class="text-xl font-semibold mb-2">Freelance Web Projects</h3>
		<p class="text-sm font-medium text-blue-500 dark:text-blue-400 mb-2">Nuxt, Next.js, Laravel, Custom APIs</p>
		<p class="text-gray-600 dark:text-gray-400 mb-4">
			5+ freelance projects specializing in custom APIs and full-stack solutions. Optimized sites with Nuxt and Next.js to improve Lighthouse scores and reduce load times.
		</p>
	</div>
</div>
