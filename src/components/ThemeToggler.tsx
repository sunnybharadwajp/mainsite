'use client';
import { useThemeContext } from '@/lib/contexts/ThemeContext';

import { Moon, Sun } from 'lucide-react';

export function ThemeToggler() {
	let { theme, setTheme } = useThemeContext();

	const toggleTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	return (
		<>
			<div className="flex gap-2 hover:cursor-pointer " onClick={toggleTheme}>
				{theme === 'dark' && <Sun className="h-[1.2rem] w-[1.2rem]" />}
				{theme === 'light' && <Moon className="h-[1.2rem] w-[1.2rem]" />}
			</div>
		</>
	);
}
