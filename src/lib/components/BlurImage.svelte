<script>
	let { src, alt, placeholder, class: className = '', ...rest } = $props();
	let loaded = $state(false);
</script>

<div class="relative {className}" {...rest}>
	<img
		src={placeholder}
		{alt}
		aria-hidden="true"
		class="absolute inset-0 w-full h-full blur-2xl  transition-opacity duration-500"
		class:opacity-0={loaded}
	/>
	<img
		{src}
		{alt}
		loading="lazy"
		class="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
		class:opacity-0={!loaded}
		onload={() => (loaded = true)}
	/>
</div>
