'use client';
import Link from 'next/link';

export default function ProjectListing({ title }: { title: string }) {
	return (
		<>
			<div className="project-listing">
				<Link href={`/blog/`} className="block blog-listing pt-1">
					<p className="m-0">{title}</p>
					{/* <p className="text-sm pt-1 pb-2 m-0 opacity-80">sdf</p> */}
				</Link>
			</div>
		</>
	);
}
