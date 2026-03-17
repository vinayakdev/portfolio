export async function load() {
	const projectFiles = import.meta.glob('/src/projects/*/index.md');
	const projects = [];

	for (const path in projectFiles) {
		const project = await projectFiles[path]();
		const slug = path.split('/').at(-2) || '';

		projects.push({
			slug,
			title: project.metadata.title,
			description: project.metadata.description,
			date: project.metadata.date,
			tech: project.metadata.tech ?? [],
			image: project.metadata.image ?? null,
			featured: project.metadata.featured ?? false
		});
	}

	projects.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	return { projects };
}
