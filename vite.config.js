import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import yaml from '@rollup/plugin-yaml';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit(),
		yaml()
	]
});
