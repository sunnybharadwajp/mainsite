import Link from 'next/link';

import { ExternalLink } from 'lucide-react';

export default function Socials() {
	return (
		<>
			<section className="content-wrapper flex gap-5">
				<Link href="https://twitter.com/" className="social-link">
					<ExternalLink size={18} />
					LinkedIn
				</Link>
				<Link href="https://twitter.com/" className="social-link">
					<ExternalLink size={18} />
					Twitter
				</Link>
				<Link href="https://twitter.com/" className="social-link">
					<ExternalLink size={18} />
					Instagram
				</Link>
				<Link href="https://twitter.com/" className="social-link">
					<ExternalLink size={18} />
					Discord
				</Link>
			</section>
		</>
	);
}
