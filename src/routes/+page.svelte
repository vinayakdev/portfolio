<script>
	import { BlurImage, SEO, SocialLinks, Experience, FAQ } from '$lib/components';
	import { onMount } from 'svelte';
	import gsap from 'gsap';

	onMount(() => {
		const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 0.15, clearProps: 'all' } });

		tl.from('.hero-title', { y: 20, opacity: 0 }, '-=0.05')
		  .from('.hero-desc', { y: 15, opacity: 0 }, '-=0.05')
		  .from('.card', { y: 25, opacity: 0, stagger: 0.04 }, '-=0.05')
		  .from('.projects-section', { y: 20, opacity: 0 }, '-=0.05')
		  .from('.experience-section', { y: 20, opacity: 0 }, '-=0.05')
		  .from('.faq-section', { y: 15, opacity: 0 }, '-=0.05');
	});
</script>

<SEO
	title="Home - Vinayak Dev | Backend Developer"
	description="Portfolio of Vinayak Dev — backend developer in Bangalore building scalable web services with Laravel full stack."
/>

<div class="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-8 mb-8">
	<div>
		<h1 class="hero-title text-4xl font-bold mb-4">Hey, I'm Vinayak Dev</h1>
		<p class="hero-desc text-lg text-gray-600 dark:text-gray-400">
			Backend developer based in Bangalore building scalable web services and APIs with Laravel full stack.
			I care deeply about readable, well-structured code — from system design down to the last query.
		</p>
	</div>
	<BlurImage
		src="/avatar.png"
		alt="Avatar"
		placeholder="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QBMRXhpZgAATU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAFKADAAQAAAABAAAAFAAAAAD/7QA4UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAAA4QklNBCUAAAAAABDUHYzZjwCyBOmACZjs+EJ+/8AAEQgAFAAUAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/bAEMAAgICAgICAwICAwUDAwMFBgUFBQUGCAYGBgYGCAoICAgICAgKCgoKCgoKCgwMDAwMDA4ODg4ODw8PDw8PDw8PD//bAEMBAgICBAQEBwQEBxALCQsQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEP/dAAQAAv/aAAwDAQACEQMRAD8A/YHx147v3v5tI0iYwQQEo7ocM7Dg8jkAHjj/APV4S3xZ13w38RdI8H29vcuNVjeU3n2iPykkCPIqtAx3sr+WyCTGPM+QA4JHd67pc9n4juNOuMhmmwGbklWPDZ9wc1+Ln7QPxYuvFXiq78U6leix0m21mWDTSXYL9ntpFhYgnGNpV2UD+6G7iv4V8MshzHi/Ps1xuc1pxlRvCCUpJ0pyclFxUZR/hqL0+09Xrdn6bnOJo4DC0KeHinzavRe8la97p73P6MvC/iSDxBpEd8+I5QSki54DrjOPYgg/pXRfaIP+ei/nXy9+z3pGv+J/g14R8Ra9dzJf6lpdjcTMzYaWSW2iZ5G92YnPvXs//CFz/wDP/L/33X6PQ8QeM8PCOHeC9q4K3PZ+/bTm/wC3t/mePLKsvm3L2nLfp28vkf/Q/dfxB4a0rXIxPeIVngGUlQ4cY5A5BBGfUV+b3gX9lX4UfEf4l+JdL8WQ3V1o2gancPDpokRLWQrMGHm4TzG5JziQZ75r9QLj/USf7p/lXyh8C/+SpfEL/sIXX/AKMWvjstwVGlnWKnSgoucKbk0knJpzSbtu7aXfQ9CtUlLDwUnezdvLY+q7CwsdLsrfTNMt47SztI1ihhhQRxxxoNqoirgKqgAAAYAq1RRX2J55/9k="
		class="hero-avatar w-40 h-40 rounded-full shrink-0"
	/>
</div>

<section class="mb-12">
	<h2 class="text-3xl font-bold mb-6">What I Do</h2>
	<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
		<div class="card bg-gray-100 dark:bg-surface-elevated p-6 rounded-lg">
			<h3 class="text-xl font-semibold mb-2">🛠️ Backend & APIs</h3>
			<p class="text-gray-600 dark:text-gray-400">Architecting scalable web services with Laravel full stack for eCommerce, SaaS, and enterprise platforms.</p>
		</div>
		<div class="card bg-gray-100 dark:bg-surface-elevated p-6 rounded-lg">
			<h3 class="text-xl font-semibold mb-2">📋 Project Leadership</h3>
			<p class="text-gray-600 dark:text-gray-400">Managing multiple projects end-to-end, onboarding developers, building starter kits, and working directly with clients.</p>
		</div>
		<div class="card bg-gray-100 dark:bg-surface-elevated p-6 rounded-lg">
			<h3 class="text-xl font-semibold mb-2">🚀 Products & Freelance</h3>
			<p class="text-gray-600 dark:text-gray-400">Founded a matrimonial platform with 3000+ users. Freelance work spanning custom APIs, Nuxt/Next.js sites, and performance optimization.</p>
		</div>
	</div>
</section>

<section class="projects-section mb-12">
	<div class="flex items-center justify-between mb-6">
		<h2 class="text-3xl font-bold">Featured Projects</h2>
		<a href="/projects" class="text-sm text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300">View all →</a>
	</div>
	<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
		<a href="/projects/keralamatrimonialguide" class="card group block bg-gray-100 dark:bg-surface-elevated p-6 rounded-lg hover:shadow-lg transition-all hover:-translate-y-0.5">
			<h3 class="text-xl font-semibold mb-1 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">Keralamatrimonialguide</h3>
			<p class="text-sm font-medium text-blue-500 dark:text-blue-400 mb-3">Laravel · PWA · Payment APIs · Webhooks</p>
			<p class="text-gray-600 dark:text-gray-400">Matrimonial platform built from scratch and scaled to 3000+ active users. Designed around clean domain separation, payment webhook reliability, and a PWA layer for push notifications.</p>
		</a>
		<div class="card bg-gray-100 dark:bg-surface-elevated p-6 rounded-lg">
			<h3 class="text-xl font-semibold mb-1">Catering Menu Manager</h3>
			<p class="text-sm font-medium text-blue-500 dark:text-blue-400 mb-3">Laravel · Livewire · PDF Generation</p>
			<p class="text-gray-600 dark:text-gray-400">Menu management system handling complex versioning and relational data. Focus was on keeping the data model simple and queries efficient while automating PDF output.</p>
		</div>
		<div class="card bg-gray-100 dark:bg-surface-elevated p-6 rounded-lg">
			<h3 class="text-xl font-semibold mb-1">eCommerce & SaaS Platforms</h3>
			<p class="text-sm font-medium text-blue-500 dark:text-blue-400 mb-3">Laravel · Livewire · Starter Kits</p>
			<p class="text-gray-600 dark:text-gray-400">Multiple production apps built on reusable starter kits designed for rapid, consistent delivery — shared auth, role systems, and billing wired up from day one.</p>
		</div>
		<div class="card bg-gray-100 dark:bg-surface-elevated p-6 rounded-lg">
			<h3 class="text-xl font-semibold mb-1">Freelance Full-Stack Builds</h3>
			<p class="text-sm font-medium text-blue-500 dark:text-blue-400 mb-3">Laravel · Nuxt · Next.js · Custom APIs</p>
			<p class="text-gray-600 dark:text-gray-400">5+ client projects ranging from custom REST APIs to full-stack Nuxt/Next.js sites. Emphasis on clean API contracts, lighthouse scores, and keeping the codebase maintainable post-handoff.</p>
		</div>
	</div>
</section>

<div class="experience-section">
	<Experience />
</div>

<FAQ />

