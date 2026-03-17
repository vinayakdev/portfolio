import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const projectFiles = import.meta.glob('/src/projects/*/index.md');
	const projects = [];

	for (const path in projectFiles) {
		const project = await projectFiles[path]();
		const slug = path.split('/').at(-2) || '';

		projects.push({
			slug,
			title: project.metadata.title,
			date: project.metadata.date,
			content: project.default,
			metadata: project.metadata
		});
	}

	projects.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	const currentIndex = projects.findIndex(p => p.slug === params.slug);

	if (currentIndex === -1) {
		throw error(404, 'Project not found');
	}

	const current = projects[currentIndex];
	const prev = currentIndex > 0
		? { slug: projects[currentIndex - 1].slug, title: projects[currentIndex - 1].title, description: projects[currentIndex - 1].metadata.description }
		: null;
	const next = currentIndex < projects.length - 1
		? { slug: projects[currentIndex + 1].slug, title: projects[currentIndex + 1].title, description: projects[currentIndex + 1].metadata.description }
		: null;

	return {
		content: current.content,
		metadata: current.metadata,
		prev,
		next
	};
}
