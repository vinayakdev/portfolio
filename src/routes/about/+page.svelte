<script>
	import { SEO, SocialLinks } from '$lib/components';
	import { yearsOfExperience } from '$lib/seo.config';
	import { onMount } from 'svelte';

	onMount(() => {
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

<h1 class="text-4xl font-bold mb-8">About Me</h1>

<section class="mb-12">
	<div class="flex flex-col items-center md:flex-row md:items-start gap-6">
		<img
			src="/avatar.png"
			alt="Avatar"
			class="w-40 h-40 rounded-full object-cover shrink-0"
		/>
		<div>
			<h2 class="text-3xl font-bold mb-4">👋 Hello!</h2>
			<p class="text-lg text-gray-600 dark:text-gray-400">
				I'm Vinayak Dev, a backend developer based in Bangalore with {yearsOfExperience} years of hands-on experience
				building scalable web services and APIs using the TALL stack (Tailwind CSS, Alpine.js, Laravel, Livewire).
				While backend is my forte, I'm comfortable working across Svelte and Vue codebases and have
				a working knowledge of React. I've worked on everything from small startups to large-scale
				platforms — designing production-grade applications, mentoring teams, and managing client relationships along the way.
			</p>
		</div>
	</div>
</section>

<section class="mb-12">
<!--	<h2 class="text-3xl font-bold mb-6">Gallery</h2>-->
	<div class="gallery-strip flex justify-center">
		{#each [
			{ src: '/about-images/sushma.jpeg', alt: 'Sushma', caption: 'Me with my headache', rotate: '-rotate-6' },
			{ src: '/about-images/mountain.jpeg', alt: 'Mountain', caption: 'Avid trek enthusiast', rotate: 'rotate-3' },
			{ src: '/about-images/beach.jpeg', alt: 'Beach', caption: 'Love the Beach', rotate: '-rotate-2' },
			{ src: '/about-images/city.jpeg', alt: 'City', caption: 'Identify this road', rotate: 'rotate-6' },
			{ src: '/about-images/water.jpeg', alt: 'Water', caption: 'Exploring mangroves', rotate: '-rotate-3' }
		] as photo}
			<div class="polaroid group transition-all duration-300 {photo.rotate} hover:!rotate-0 hover:scale-110 hover:z-10 hover:shadow-2xl">
				<div class="wrapper bg-white dark:bg-gray-200 shadow-lg relative" style="padding: clamp(4px, 0.5vw, 8px); padding-bottom: clamp(24px, 4vw, 40px);">
					<div class="relative aspect-square overflow-hidden">
						<img src={photo.src} alt={photo.alt} class="w-full h-full object-cover" />
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

<section class="mb-12">
	<h2 class="text-3xl font-bold mb-6">🛠️ Skills</h2>
	<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
		<div class="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
			<h3 class="text-xl font-semibold mb-2">Backend</h3>
			<p class="text-gray-600 dark:text-gray-400">PHP, Laravel, Livewire, Python, SQL, REST APIs</p>
		</div>
		<div class="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
			<h3 class="text-xl font-semibold mb-2">Frontend</h3>
			<p class="text-gray-600 dark:text-gray-400">Tailwind CSS, Alpine.js, Svelte, Vue, React (basics), Nuxt, Next.js</p>
		</div>
		<div class="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
			<h3 class="text-xl font-semibold mb-2">Professional</h3>
			<p class="text-gray-600 dark:text-gray-400">Project Management, SEO, Client Relations, Leadership, Strategic Planning</p>
		</div>
	</div>
</section>

<section class="mb-12">
	<h2 class="text-3xl font-bold mb-6">🎓 Education</h2>
	<div class="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
		<h3 class="text-xl font-semibold mb-1">BTech in Computer Science</h3>
		<p class="text-sm text-gray-500 dark:text-gray-400 mb-1">Nehru College of Engineering &middot; 2016 - 2020</p>
	</div>
</section>

<section class="mb-12">
	<h2 class="text-3xl font-bold mb-6">🎮 Beyond Code</h2>
	<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
		<div class="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
			<h3 class="text-xl font-semibold mb-2">AI & Automation</h3>
			<p class="text-gray-600 dark:text-gray-400">Prompt engineering, workflow optimization, and AI-driven productivity tools.</p>
		</div>
		<div class="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
			<h3 class="text-xl font-semibold mb-2">Financial Markets</h3>
			<p class="text-gray-600 dark:text-gray-400">Futures trading and market analysis.</p>
		</div>
		<div class="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
			<h3 class="text-xl font-semibold mb-2">Gaming</h3>
			<p class="text-gray-600 dark:text-gray-400">PC and PlayStation enthusiast — will happily debate game mechanics, lore, and graphics for hours.</p>
		</div>
		<div class="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
			<h3 class="text-xl font-semibold mb-2">Languages</h3>
			<p class="text-gray-600 dark:text-gray-400">Malayalam (Native), English (Fluent)</p>
		</div>
	</div>
</section>

