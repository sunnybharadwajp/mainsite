import { Articles } from '@/lib/collections';
import Link from 'next/link';

import BlogListing from './BlogListing';

const BlogPage = async () => {
	const ArticlesCollection = await Articles;
	const articles = await ArticlesCollection.find({})
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
		<div>
			{/* <h1>Blog</h1> */}
			<div className="blog-filters flex gap-4 px-4 py-3">
				<Link href="">Newest</Link>
				<Link href="">Featured</Link>
				<Link href="">Projects</Link>
				<Link href="">Ideas & Thoughts</Link>
			</div>

			<div className="blog-list">
				{articles.map((article: any) => (
					<BlogListing
						key={article._id.toString()}
						slug={article.slug}
						title={article.title}
						createdAt={article.datetime.createdAt}
					/>
				))}
			</div>
		</div>
	);
};

export default BlogPage;
