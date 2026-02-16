export async function load() {
	const postFiles = import.meta.glob('/src/posts/*.md');
	const posts = [];

	for (const path in postFiles) {
		const post = await postFiles[path]();
		const slug = path.split('/').pop()?.replace('.md', '') || '';

		posts.push({
			slug,
			title: post.metadata.title,
			description: post.metadata.description,
			date: post.metadata.date
		});
	}

	// Sort by date, newest first
	posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	return { posts };
}
