'use client';

import ThemeContext from '@/lib/contexts/ThemeContext';

export default function Wrapper({ children }: { children: React.ReactNode }) {
	return (
		<>
			<ThemeContext>
				<div className="wrapper max-w-[800px] m-auto min-h-screen relative flex flex-col px-4">
					{children}
				</div>
			</ThemeContext>
		</>
	);
}
