'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggler } from '@/components/ThemeToggler';

const navLinks = [
	{
		label: 'Home',
		href: '/',
	},
	{
		label: 'About',
		href: '/work',
	},
	{
		label: 'Projects',
		href: '/projects',
	},
	{
		label: 'Blog',
		href: '/blog',
	},
	{
		label: 'Contact',
		href: '/contact',
	},
];

const HeaderComponent = () => {
	const pathname = `/${usePathname().split('/')[1]}`;
	return (
		<>
			<nav className="flex justify-between items-center pt-3 pb-1 px-4">
				<div className="left">
					<Link href="/">
						{/* <Image
						src="https://bytegrad.com/course-assets/youtube/example-logo.png"
						alt="logo"
						className=""
						width={25}
						height={25}
					/> */}
					</Link>
					<ul className="flex  gap-2">
						{navLinks.map((link) => (
							<li key={link.href}>
								<Link
									href={link.href}
									className={`${
										pathname === link.href
											? 'text-zinc-100 hover:text-zinc-100 '
											: 'text-zinc-400'
									} text-sm mr-1 py-2 pr-3 pl-0 text-zinc-400 hover:text-zinc-300`}>
									{link.label}
								</Link>
							</li>
						))}
					</ul>
				</div>
				<div className="right ">
					<ThemeToggler />
				</div>
			</nav>
		</>
	);
};

export default HeaderComponent;
