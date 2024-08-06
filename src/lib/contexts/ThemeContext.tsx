'use client';

import { createContext } from 'react';
import { useState, useContext, useEffect } from 'react';

type ProviderProps = {
	children: React.ReactNode;
};

type Theme = 'dark' | 'light';

type ThemeContext = {
	theme: Theme;
	setTheme: React.Dispatch<React.SetStateAction<Theme>>;
};

export const ThemeContext = createContext<ThemeContext | undefined>(undefined);

export default function ThemeContextProvider({ children }: ProviderProps) {
	const [theme, setTheme] = useState<Theme>('dark');

	useEffect(() => {
		const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		setTheme(systemPrefersDark ? 'dark' : 'light');
	}, []);

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme);
		localStorage.setItem('theme', theme);
	}, [theme]);
	return (
		<>
			<ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
		</>
	);
}

export function useThemeContext() {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error('useThemeContext must be used within a ThemeContextProvider');
	}
	return context;
}
