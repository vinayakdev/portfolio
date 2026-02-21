<script>
	import { BlurImage, SEO, SocialLinks, Experience } from '$lib/components';
	import { yearsOfExperience } from '$lib/seo.config';
	import { onMount } from 'svelte';
	import gsap from 'gsap';

	onMount(() => {
		const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 0.15, clearProps: 'all' } });

		tl.from('.hero-title', { y: 20, opacity: 0 }, '-=0.05')
		  .from('.hero-desc', { y: 15, opacity: 0 }, '-=0.05')
		  .from('.card', { y: 25, opacity: 0, stagger: 0.04 }, '-=0.05')
		  .from('.experience-section', { y: 20, opacity: 0 }, '-=0.05')
		  .from('.highlights-section', { y: 15, opacity: 0 }, '-=0.05');
	});
</script>

<SEO
	title="Home - Vinayak Dev | Backend Developer"
	description="Portfolio of Vinayak Dev — backend developer in Bangalore building scalable web services with Laravel, Livewire, and the TALL stack."
/>

<div class="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-8 mb-8">
	<div>
		<h1 class="hero-title text-4xl font-bold mb-4">Hey, I'm Vinayak Dev</h1>
		<p class="hero-desc text-lg text-gray-600 dark:text-gray-400">
			Backend developer based in Bangalore with {yearsOfExperience} years of experience building scalable web services
			and APIs using the TALL stack. From architecting production-grade applications to mentoring teams
			and managing client relationships — I enjoy the full spectrum of shipping software.
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
			<p class="text-gray-600 dark:text-gray-400">Architecting scalable web services with Laravel, Livewire, and the TALL stack for eCommerce, SaaS, and enterprise platforms.</p>
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

<div class="experience-section">
	<Experience />
</div>

<section class="highlights-section">
	<h2 class="text-3xl font-bold mb-4">Recent Highlights</h2>
	<p class="text-gray-600 dark:text-gray-400">
		Check out my <a href="/projects" class="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300">latest projects</a> or read my
		<a href="/blog" class="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300">recent blog posts</a> to see what I've been working on.
	</p>
</section>
