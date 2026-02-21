<script>
	import { SEO, SocialLinks, Experience } from '$lib/components';
	import { yearsOfExperience } from '$lib/seo.config';
</script>

<SEO
	title="Home - Vinayak Dev | Backend Developer"
	description="Portfolio of Vinayak Dev — backend developer in Bangalore building scalable web services with Laravel, Livewire, and the TALL stack."
/>

<div class="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-8 mb-8">
	<div>
		<h1 class="text-4xl font-bold mb-4">Hey, I'm Vinayak Dev</h1>
		<p class="text-lg text-gray-600 dark:text-gray-400">
			Backend developer based in Bangalore with {yearsOfExperience} years of experience building scalable web services
			and APIs using the TALL stack. From architecting production-grade applications to mentoring teams
			and managing client relationships — I enjoy the full spectrum of shipping software.
		</p>
	</div>
	<img src="/avatar.png" alt="Avatar" class="w-40 h-40 rounded-full object-cover shrink-0" />
</div>

<section class="mb-12">
	<h2 class="text-3xl font-bold mb-6">What I Do</h2>
	<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
		<div class="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
			<h3 class="text-xl font-semibold mb-2">🛠️ Backend & APIs</h3>
			<p class="text-gray-600 dark:text-gray-400">Architecting scalable web services with Laravel, Livewire, and the TALL stack for eCommerce, SaaS, and enterprise platforms.</p>
		</div>
		<div class="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
			<h3 class="text-xl font-semibold mb-2">📋 Project Leadership</h3>
			<p class="text-gray-600 dark:text-gray-400">Managing multiple projects end-to-end, onboarding developers, building starter kits, and working directly with clients.</p>
		</div>
		<div class="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
			<h3 class="text-xl font-semibold mb-2">🚀 Products & Freelance</h3>
			<p class="text-gray-600 dark:text-gray-400">Founded a matrimonial platform with 3000+ users. Freelance work spanning custom APIs, Nuxt/Next.js sites, and performance optimization.</p>
		</div>
	</div>
</section>

<Experience />

<section>
	<h2 class="text-3xl font-bold mb-4">Recent Highlights</h2>
	<p class="text-gray-600 dark:text-gray-400">
		Check out my <a href="/projects" class="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300">latest projects</a> or read my
		<a href="/blog" class="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300">recent blog posts</a> to see what I've been working on.
	</p>
</section>
