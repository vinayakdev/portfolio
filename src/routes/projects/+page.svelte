<script>
	import { SEO } from '$lib/components';
</script>

<SEO
	title="Projects - Your Name | Portfolio"
	description="Explore my portfolio of web development projects including e-commerce platforms, task management apps, and more. Built with modern technologies like SvelteKit, React, and Vue."
	keywords={['projects', 'portfolio', 'web development', 'sveltekit', 'react', 'vue']}
/>

<h1 class="text-4xl font-bold mb-4">My Projects</h1>

<p class="text-lg text-gray-600 dark:text-gray-400 mb-8">
	Here are some of the projects I've worked on recently. Each one represents a unique challenge and learning experience.
</p>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
	<div class="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg transition-shadow">
		<h3 class="text-xl font-semibold mb-2">E-Commerce Platform</h3>
		<p class="text-sm font-medium text-blue-500 dark:text-blue-400 mb-2">SvelteKit, Stripe, Supabase</p>
		<p class="text-gray-600 dark:text-gray-400 mb-4">
			A full-featured e-commerce platform with payment processing, inventory management, and real-time updates.
		</p>
		<p class="text-blue-500 dark:text-blue-400 font-medium hover:underline cursor-pointer">🔗 View Project →</p>
	</div>

	<div class="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg transition-shadow">
		<h3 class="text-xl font-semibold mb-2">Task Management App</h3>
		<p class="text-sm font-medium text-blue-500 dark:text-blue-400 mb-2">React, Firebase, TailwindCSS</p>
		<p class="text-gray-600 dark:text-gray-400 mb-4">
			Collaborative task management tool with real-time sync, drag-and-drop, and team features.
		</p>
		<p class="text-blue-500 dark:text-blue-400 font-medium hover:underline cursor-pointer">🔗 View Project →</p>
	</div>

	<div class="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg transition-shadow">
		<h3 class="text-xl font-semibold mb-2">Weather Dashboard</h3>
		<p class="text-sm font-medium text-blue-500 dark:text-blue-400 mb-2">Vue.js, OpenWeather API, Chart.js</p>
		<p class="text-gray-600 dark:text-gray-400 mb-4">
			Beautiful weather visualization dashboard with forecasts, historical data, and interactive charts.
		</p>
		<p class="text-blue-500 dark:text-blue-400 font-medium hover:underline cursor-pointer">🔗 View Project →</p>
	</div>

	<div class="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg transition-shadow">
		<h3 class="text-xl font-semibold mb-2">Blog CMS</h3>
		<p class="text-sm font-medium text-blue-500 dark:text-blue-400 mb-2">Next.js, MDX, Vercel</p>
		<p class="text-gray-600 dark:text-gray-400 mb-4">
			Custom content management system for markdown-based blogs with syntax highlighting and SEO optimization.
		</p>
		<p class="text-blue-500 dark:text-blue-400 font-medium hover:underline cursor-pointer">🔗 View Project →</p>
	</div>

	<div class="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg transition-shadow">
		<h3 class="text-xl font-semibold mb-2">Portfolio Generator</h3>
		<p class="text-sm font-medium text-blue-500 dark:text-blue-400 mb-2">Astro, TypeScript, GitHub API</p>
		<p class="text-gray-600 dark:text-gray-400 mb-4">
			Automated portfolio generator that pulls data from GitHub and creates beautiful project showcases.
		</p>
		<p class="text-blue-500 dark:text-blue-400 font-medium hover:underline cursor-pointer">🔗 View Project →</p>
	</div>

	<div class="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg transition-shadow">
		<h3 class="text-xl font-semibold mb-2">Real-time Chat</h3>
		<p class="text-sm font-medium text-blue-500 dark:text-blue-400 mb-2">Node.js, Socket.io, MongoDB</p>
		<p class="text-gray-600 dark:text-gray-400 mb-4">
			Real-time chat application with rooms, direct messaging, and file sharing capabilities.
		</p>
		<p class="text-blue-500 dark:text-blue-400 font-medium hover:underline cursor-pointer">🔗 View Project →</p>
	</div>
</div>
