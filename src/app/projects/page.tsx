import { Articles } from '@/lib/collections';
import Link from 'next/link';

import ProjectListing from './ProjectListing';

export default async function ProjectsPage() {
	const ArticlesCollection = await Articles;
	const projects = await ArticlesCollection.find({ category: 'Project' })
		.project({
			_id: 1,
			slug: 1,
			title: 1,
			tags: 1,
			category: 1,
			coverImageUrl: 1,
			datetime: 1,
		})
		.toArray();

	return (
		<>
			<div className="projects-list">
				{projects.map((project: any) => (
					<ProjectListing title={project.title} />
				))}
			</div>
		</>
	);
}
