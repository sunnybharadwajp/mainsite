import { Articles } from '@/lib/collections';
import ArticleContent from './ArticleContent';
import Image from 'next/image';
import '@/styles/markdown.css';

const ArticlePage = async ({ params }: { params: { slug: string } }) => {
	const slug = params.slug;
	const ArticlesCollection = await Articles;
	const article = await ArticlesCollection.findOne({
		slug: slug,
	});
	let articleDate;
	if (article)
		articleDate = `${new Date(article.datetime.createdAt).toLocaleDateString()} ${new Date(article.datetime.createdAt).toLocaleTimeString()}`;

	return (
		<div className="article-wrapper pb-12 px-4">
			{article ? (
				<div className="article-wrapper">
					<h2>{article.title}</h2>

					<div className="flex gap-2 items-center mb-4 ">
						<p className="m-0">Sunny Bharadwaj</p>
						<span>-</span>
						<p className="m-0">{articleDate}</p>
					</div>

					<Image
						src={article.coverImageUrl}
						alt="Blogpost Cover Image"
						width={800}
						height={400}
						className="object-cover"
						priority={true}
						style={{ objectFit: 'cover' }}
					/>
					<ArticleContent data={article.content} />
				</div>
			) : (
				<div>Article not found</div>
			)}
		</div>
	);
};

export default ArticlePage;
