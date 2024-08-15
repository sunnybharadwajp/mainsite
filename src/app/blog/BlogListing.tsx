'use client';
import Link from 'next/link';
import { useEffect, useContext, useState } from 'react';
import { ThemeContext } from '@/lib/contexts/ThemeContext';

interface BlogListingProps {
	slug: string;
	title: string;
	createdAt?: string | number | Date;
}

const BlogListing = ({ slug, title, createdAt }: BlogListingProps) => {
	const articleDate = createdAt
		? `${new Date(createdAt).toLocaleDateString()} - ${new Date(createdAt).toLocaleTimeString()}`
		: '';
	const [formattedDate, setFormattedDate] = useState('');

	useEffect(() => {
		if (createdAt === undefined) return;
		const date = new Date(createdAt);
		setFormattedDate(`${date.toLocaleDateString()} - ${date.toLocaleTimeString()}`);
	}, [createdAt]);

	return (
		<Link href={`/blog/${slug}`} className="block blog-listing pt-1">
			<p className="m-0">{title}</p>
			<p className="text-sm pt-1 pb-2 m-0 opacity-80">{formattedDate}</p>
		</Link>
	);
};

export default BlogListing;
