import { FC, useReducer, useEffect, createContext } from 'react';

export const DarkModeContext = createContext<{ dark: boolean; toggle: () => void }>({
	dark: false,
	toggle: () => {}
});

const reducer = (state: boolean, action: { type: string }) => {
	switch (action.type) {
		case 'TOGGLE':
			return !state;
		case 'DARK':
			return true;
		case 'LIGHT':
			return false;
		default:
			return state;
	}
};

const DarkMode: FC = ({ children }) => {
	const [dark, dispatch] = useReducer(reducer, false);
	const toggle = () => {
		const root = window.document.documentElement;
		const lightFavicon = document.querySelector('link#light-favicon')!;
		const darkFavicon = document.querySelector('link#dark-favicon')!;

		if (dark) {
			window.localStorage.setItem('theme', 'light');
			root.style.setProperty('--background', '#F9F9F9');
			root.style.setProperty('--secondary-background', 'white');
			root.style.setProperty('--text', 'black');
			root.style.setProperty('--text-inverted', 'white');
			document.head.append(darkFavicon);
		} else {
			window.localStorage.setItem('theme', 'dark');
			root.style.setProperty('--background', '#262626');
			root.style.setProperty('--secondary-background', '#2F2F2F');
			root.style.setProperty('--text', 'white');
			root.style.setProperty('--text-inverted', 'black');
			document.head.append(lightFavicon);
		}

		dispatch({ type: 'TOGGLE' });
	};

	useEffect(() => {
		const root = window.document.documentElement;
		const initialTheme = root.style.getPropertyValue('--theme');

		dispatch({ type: initialTheme === 'dark' ? 'DARK' : 'LIGHT' });
	}, []);

	return <DarkModeContext.Provider value={{ dark, toggle }}>{children}</DarkModeContext.Provider>;
};

export default DarkMode;
