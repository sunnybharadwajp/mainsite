'use client';
import { marked } from 'marked';

export default function ArticleContent({ data }: any) {
	const htmlContent = data;
	const previewHTML = {
		__html: marked.parse(htmlContent),
	};

	return <div dangerouslySetInnerHTML={previewHTML}></div>;
}

ArticleContent;
