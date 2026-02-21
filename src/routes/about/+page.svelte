<script>
	import { BlurImage, SEO, SocialLinks } from '$lib/components';
	import { yearsOfExperience } from '$lib/seo.config';
	import { onMount } from 'svelte';
	import gsap from 'gsap';

	onMount(() => {
		const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 0.15, clearProps: 'all' } });

		tl.from('.about-avatar', { scale: 0, opacity: 0 })
		  .from('.about-hello', { y: 20, opacity: 0 }, '-=0.05')
		  .from('.about-bio', { y: 15, opacity: 0 }, '-=0.05')
		  .from('.gallery-strip', { y: 30, opacity: 0 }, '-=0.05')
		  .from('.skill-card', { y: 25, opacity: 0, stagger: 0.04 }, '-=0.05')
		  .from('.edu-section', { y: 20, opacity: 0 }, '-=0.05')
		  .from('.interest-card', { y: 25, opacity: 0, stagger: 0.04 }, '-=0.05');

		document.querySelectorAll('.polaroid').forEach((polaroid) => {
			polaroid.addEventListener('mouseenter', (e) => {
				const wrapper = e.currentTarget.querySelector('.wrapper');
				setTimeout(() => wrapper.style.setProperty('transition-duration', '0s'), 500);
			});

			polaroid.addEventListener('mousemove', (e) => {
				const { left, top, width: w, height: h } = e.currentTarget.getBoundingClientRect();
				const x = e.clientX - left;
				const y = e.clientY - top;

				e.currentTarget
						.querySelector('.wrapper')
						.style.setProperty(
						'transform',
						`perspective(800px) rotateX(${(y / h - 0.5) * 25}deg) rotateY(${(x / w - 0.5) * -25}deg)`
				);

				e.currentTarget
						.querySelector('.glare')
						.style.setProperty(
						'transform',
						`translate(calc(${x / 1.5}px - 50%), calc(${y / 1.5}px - 50%)) scale(3)`
				);
			});

			polaroid.addEventListener('mouseleave', (e) => {
				const wrapper = e.currentTarget.querySelector('.wrapper');
				wrapper.style.setProperty('transition-duration', '0.5s');
				wrapper.style.setProperty('transform', 'perspective(800px) rotateX(0deg) rotateY(0deg)');
			});
		});
	});
</script>

<SEO
	title="About - Vinayak Dev | Backend Developer"
	description={`Learn about Vinayak Dev's journey as a backend developer. ${yearsOfExperience} years of experience building scalable web services with Laravel, Livewire, and the TALL stack.`}
	keywords={['about', 'backend developer', 'laravel', 'livewire', 'tall stack', 'vinayak dev']}
/>

<!--<h1 class="text-4xl font-bold mb-8">About Me</h1>-->

<section class="mb-12">
	<div class="flex flex-col items-center md:flex-row md:items-start gap-6">
		<BlurImage
			src="/avatar.png"
			alt="Avatar"
			placeholder="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QBMRXhpZgAATU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAFKADAAQAAAABAAAAFAAAAAD/7QA4UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAAA4QklNBCUAAAAAABDUHYzZjwCyBOmACZjs+EJ+/8AAEQgAFAAUAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/bAEMAAgICAgICAwICAwUDAwMFBgUFBQUGCAYGBgYGCAoICAgICAgKCgoKCgoKCgwMDAwMDA4ODg4ODw8PDw8PDw8PD//bAEMBAgICBAQEBwQEBxALCQsQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEP/dAAQAAv/aAAwDAQACEQMRAD8A/YHx147v3v5tI0iYwQQEo7ocM7Dg8jkAHjj/APV4S3xZ13w38RdI8H29vcuNVjeU3n2iPykkCPIqtAx3sr+WyCTGPM+QA4JHd67pc9n4juNOuMhmmwGbklWPDZ9wc1+Ln7QPxYuvFXiq78U6leix0m21mWDTSXYL9ntpFhYgnGNpV2UD+6G7iv4V8MshzHi/Ps1xuc1pxlRvCCUpJ0pyclFxUZR/hqL0+09Xrdn6bnOJo4DC0KeHinzavRe8la97p73P6MvC/iSDxBpEd8+I5QSki54DrjOPYgg/pXRfaIP+ei/nXy9+z3pGv+J/g14R8Ra9dzJf6lpdjcTMzYaWSW2iZ5G92YnPvXs//CFz/wDP/L/33X6PQ8QeM8PCOHeC9q4K3PZ+/bTm/wC3t/mePLKsvm3L2nLfp28vkf/Q/dfxB4a0rXIxPeIVngGUlQ4cY5A5BBGfUV+b3gX9lX4UfEf4l+JdL8WQ3V1o2gancPDpokRLWQrMGHm4TzG5JziQZ75r9QLj/USf7p/lXyh8C/+SpfEL/sIXX/AKMWvjstwVGlnWKnSgoucKbk0knJpzSbtu7aXfQ9CtUlLDwUnezdvLY+q7CwsdLsrfTNMt47SztI1ihhhQRxxxoNqoirgKqgAAAYAq1RRX2J55/9k="
			class="about-avatar w-40 h-40 rounded-full shrink-0"
		/>
		<div>
			<h2 class="about-hello text-3xl font-bold mb-4">👋 Gumasthe!</h2>
			<p class="about-bio text-lg text-gray-600 dark:text-gray-400">
				I'm Vinayak Dev, a backend developer based in Bangalore with {yearsOfExperience} years of hands-on experience
				building scalable web services and APIs using the TALL stack (Tailwind CSS, Alpine.js, Laravel, Livewire).
				While backend is my forte, I'm comfortable working across Svelte and Vue codebases and have
				a working knowledge of React. I've worked on everything from small startups to large-scale
				platforms — designing production-grade applications, mentoring teams, and managing client relationships along the way.
			</p>
		</div>
	</div>
</section>

<section class="mb-12  overflow-y-visible">
<!--	<h2 class="text-3xl font-bold mb-6">Gallery</h2>-->
	<div class="gallery-strip flex justify-center py-6">
		{#each [
			{ src: '/about-images/sushma.jpeg', alt: 'Sushma', caption: 'My headache', rotate: '-rotate-6' },
			{ src: '/about-images/mountain.jpeg', alt: 'Mountain', caption: 'Chasing summits', rotate: 'rotate-3' },
			{ src: '/about-images/beach.jpeg', alt: 'Beach', caption: 'Love the Beach', rotate: '-rotate-2' },
			{ src: '/about-images/city.jpeg', alt: 'City', caption: 'Lost in the city', rotate: 'rotate-6' },
			{ src: '/about-images/water.jpeg', alt: 'Water', caption: 'Into the mangroves', rotate: '-rotate-3' }
		] as photo}
			<div class="polaroid group transition-all duration-300 {photo.rotate} hover:!rotate-0 hover:scale-110 hover:z-10 hover:shadow-2xl">
				<div class="wrapper bg-white dark:bg-gray-200 shadow-lg relative" style="padding: clamp(4px, 0.5vw, 8px); padding-bottom: clamp(24px, 4vw, 40px);">
					<div class="relative aspect-square overflow-hidden">
						<img src={photo.src} alt={photo.alt} width="300" height="300" loading="lazy" class="w-full h-full object-cover" />
						<div class="absolute inset-0 shadow-[inset_0_0_4px_rgba(0,0,0,.3)]"></div>
					</div>
					<p class="absolute left-0 right-0 text-center text-gray-600 font-handwriting" style="bottom: clamp(4px, 0.8vw, 8px); font-size: clamp(8px, 1.2vw, 12px);">{photo.caption}</p>
					<div
							class="glare pointer-events-none absolute inset-0 aspect-square scale-[2] bg-[radial-gradient(circle,rgba(255,255,255,.5),rgba(255,255,255,0)_50%)] opacity-0 mix-blend-overlay transition-opacity will-change-transform group-hover:opacity-100"
					></div>
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	.gallery-strip {
		--card-width: clamp(80px, 15vw, 160px);
		--overlap: clamp(-16px, -2.5vw, -40px);
		flex-wrap: wrap;
		row-gap: 1rem;
	}
	.gallery-strip .polaroid {
		width: var(--card-width);
		flex-shrink: 0;
		margin-left: var(--overlap);
	}
	.gallery-strip .polaroid:first-child {
		margin-left: 0;
	}
	@media (max-width: 767px) {
		.gallery-strip {
			--card-width: 26vw;
			--overlap: -3vw;
			max-width: calc(var(--card-width) * 3 + var(--overlap) * 2);
			margin-inline: auto;
		}
	}
</style>

<section class="mb-12 overflow-x-hidden">
	<h2 class="text-3xl font-bold mb-6">🛠️ Skills</h2>
	<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
		<div class="skill-card bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
			<h3 class="text-xl font-semibold mb-2">Backend</h3>
			<p class="text-gray-600 dark:text-gray-400">PHP, Laravel, Livewire, Python, SQL, REST APIs</p>
		</div>
		<div class="skill-card bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
			<h3 class="text-xl font-semibold mb-2">Frontend</h3>
			<p class="text-gray-600 dark:text-gray-400">Tailwind CSS, Alpine.js, Svelte, Vue, React (basics), Nuxt, Next.js</p>
		</div>
		<div class="skill-card bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
			<h3 class="text-xl font-semibold mb-2">Professional</h3>
			<p class="text-gray-600 dark:text-gray-400">Project Management, SEO, Client Relations, Leadership, Strategic Planning</p>
		</div>
	</div>
</section>

<section class="edu-section mb-12">
	<h2 class="text-3xl font-bold mb-6">🎓 Education</h2>
	<div class="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
		<h3 class="text-xl font-semibold mb-1">BTech in Computer Science</h3>
		<p class="text-sm text-gray-500 dark:text-gray-400 mb-1">Nehru College of Engineering &middot; 2016 - 2020</p>
	</div>
</section>

<section class="mb-12">
	<h2 class="text-3xl font-bold mb-6">🎮 Beyond Code</h2>
	<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
		<div class="interest-card bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
			<h3 class="text-xl font-semibold mb-2">AI & Automation</h3>
			<p class="text-gray-600 dark:text-gray-400">Prompt engineering, workflow optimization, and AI-driven productivity tools.</p>
		</div>
		<div class="interest-card bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
			<h3 class="text-xl font-semibold mb-2">Financial Markets</h3>
			<p class="text-gray-600 dark:text-gray-400">Futures trading and market analysis.</p>
		</div>
		<div class="interest-card bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
			<h3 class="text-xl font-semibold mb-2">Gaming</h3>
			<p class="text-gray-600 dark:text-gray-400">PC and PlayStation enthusiast — will happily debate game mechanics, lore, and graphics for hours.</p>
		</div>
		<div class="interest-card bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
			<h3 class="text-xl font-semibold mb-2">Languages</h3>
			<p class="text-gray-600 dark:text-gray-400">Malayalam (Native), English (Fluent)</p>
		</div>
	</div>
</section>

