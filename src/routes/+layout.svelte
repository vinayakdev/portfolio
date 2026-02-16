<script>
	import "../app.css";
	import {SocialLinks, ThemeToggle} from '$lib/components';
	import { theme } from '$lib/stores/theme';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	// Apply theme class on mount and when theme changes
	$: if (browser) {
		if ($theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}
</script>

<div class="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
	<nav class="bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
		<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex justify-between items-center h-16">
				<ul class="flex gap-8">
					<li><a href="/" class="font-medium hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Home</a></li>
					<li><a href="/projects" class="font-medium hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Projects</a></li>
					<li><a href="/blog" class="font-medium hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Blog</a></li>
					<li><a href="/about" class="font-medium hover:text-blue-500 dark:hover:text-blue-400 transition-colors">About</a></li>
				</ul>

				<ThemeToggle />
			</div>
		</div>
	</nav>

	<main class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
		<slot />
	</main>

	<div class="mb-12">
		<SocialLinks centered={true} />
	</div>
</div>
