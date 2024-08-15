import Image from 'next/image';
import Link from 'next/link';

import Socials from '@/components/Socials';

export default function HomePage() {
	return (
		<>
			<main>
				<div className="spacer"></div>
				<section>
					<div className="intro content-wrapper">
						<p className="text-2xl font-semibold">
							Hello there! <span className="waving-hand mb-4">👋</span>
						</p>
						<p>
							I'm Bharadwaj - a Cross-Platform Full-Stack Developer, UI/UX Designer
							and Audio Engineer. I currently run Chakra, a design agency & web
							development consultancy for Startups and other SMEs. I also study and
							work in emerging technologies like AI, ML, and Blockchain.
						</p>
					</div>

					<section className="content-wrapper">
						<Image
							src="https://grvopvvzmidhtnio.public.blob.vercel-storage.com/mainsite/QebtQ8Lf4k878w1yvR722-1jLXVPxo2DyUCx4hip4wx2DGQ0w8rH.svg"
							alt="Blogpost Cover Image"
							width={800}
							height={400}
							className="object-cover "
							priority={true}
							style={{ objectFit: 'cover' }}
						/>
					</section>

					<section className="content-wrapper">
						<p>
							In my spare time, I find myself enjoying designing and developing simple
							graceful applications, making music, experimenting with deep learning
							and neural networks. I also write about my explorations on my{' '}
							<Link href="/blog">blog</Link>. Here's some of my recent work:
						</p>
					</section>

					<Socials />
				</section>
			</main>
		</>
	);
}
