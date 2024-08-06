import db from './db';

const getArticlesCollection = async () => {
	const client = await db;
	return client.db().collection('articles');
};
const Articles = getArticlesCollection();

export { Articles };
