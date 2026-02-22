<script lang="ts">
	import faqData from '$lib/data/faq.yaml';

	interface FaqItem {
		question: string;
		answer: string;
	}

	const faqs: FaqItem[] = faqData;

	let openIndex: number | null = null;

	function toggle(index: number) {
		openIndex = openIndex === index ? null : index;
	}
</script>

<section class="faq-section mb-16">
	<h2 class="text-3xl font-bold mb-2">Pricing FAQ</h2>
	<p class="text-gray-600 dark:text-gray-400 mb-8">
		Everything you need to know before we work together.
	</p>

	<div class="flex flex-col gap-3">
		{#each faqs as faq, i}
			<div
				class="rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-surface-elevated overflow-hidden transition-all duration-200"
			>
				<button
					class="w-full text-left flex items-center justify-between gap-4 px-5 py-4 font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-150 cursor-pointer"
					on:click={() => toggle(i)}
					aria-expanded={openIndex === i}
				>
					<span>{faq.question}</span>
					<span
						class="shrink-0 text-gray-500 dark:text-gray-400 transition-transform duration-200 {openIndex === i
							? 'rotate-180'
							: ''}"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="18"
							height="18"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<polyline points="6 9 12 15 18 9"></polyline>
						</svg>
					</span>
				</button>

				{#if openIndex === i}
					<div class="px-5 pb-5 pt-1 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
						{#each faq.answer.split('\n') as line}
							{#if line.startsWith('**') && line.endsWith('**')}
								<p class="font-semibold text-gray-800 dark:text-gray-200 mt-3 mb-1">
									{line.replace(/\*\*/g, '')}
								</p>
							{:else if line.startsWith('- ')}
								<p class="ml-3 before:content-['·'] before:mr-2 before:text-gray-400">
									{line.slice(2)}
								</p>
							{:else if line.trim()}
								<p class="mb-1">{line}</p>
							{/if}
						{/each}
					</div>
				{/if}
			</div>
		{/each}
	</div>
</section>
