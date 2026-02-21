import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const postFiles = import.meta.glob('/src/posts/*/index.md');
	const posts = [];

	for (const path in postFiles) {
		const post = await postFiles[path]();
		const slug = path.split('/').at(-2) || '';

		posts.push({
			slug,
			title: post.metadata.title,
			date: post.metadata.date,
			content: post.default,
			metadata: post.metadata
		});
	}

	// Sort by date, newest first
	posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	const currentIndex = posts.findIndex(p => p.slug === params.slug);

	if (currentIndex === -1) {
		throw error(404, 'Blog post not found');
	}

	const current = posts[currentIndex];
	// prev = newer post (go back in list), next = older post (go forward in list)
	const prev = currentIndex > 0 ? { slug: posts[currentIndex - 1].slug, title: posts[currentIndex - 1].title, description: posts[currentIndex - 1].metadata.description } : null;
	const next = currentIndex < posts.length - 1 ? { slug: posts[currentIndex + 1].slug, title: posts[currentIndex + 1].title, description: posts[currentIndex + 1].metadata.description } : null;

	return {
		content: current.content,
		metadata: current.metadata,
		prev,
		next
	};
}
