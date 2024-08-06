import { Articles } from '@/lib/collections';
import { ObjectId } from 'mongodb';
import { type ArticleInterface } from '@/lib/interfaces/Article';

const fetchArticles = async () => {
	const collection = await Articles;
	const articles = await collection
		.find({})
		.sort({ createdAt: -1 })
		.toArray();
	return articles;
};

const fetchOneArticle = async (slug: string | string[]) => {
	const collection = await Articles;
	try {
		let article = await collection.findOne({
			slug: slug,
		});
		return article;
	} catch (err) {
		console.log(err);
		return null;
	}
};

export { fetchArticles, fetchOneArticle };
