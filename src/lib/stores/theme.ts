import { writable } from 'svelte/store';
import { browser } from '$app/environment';

type Theme = 'light' | 'dark';

// Get initial theme - read directly from DOM to avoid flash
const getInitialTheme = (): Theme => {
	if (!browser) return 'light';

	// Check if dark class is already set by the blocking script
	if (document.documentElement.classList.contains('dark')) {
		return 'dark';
	}

	return 'light';
};

export const theme = writable<Theme>(getInitialTheme());

// Apply theme to document and save to localStorage
export const toggleTheme = () => {
	theme.update(current => {
		const newTheme = current === 'light' ? 'dark' : 'light';

		if (browser) {
			localStorage.setItem('theme', newTheme);
			if (newTheme === 'dark') {
				document.documentElement.classList.add('dark');
			} else {
				document.documentElement.classList.remove('dark');
			}
		}

		return newTheme;
	});
};
