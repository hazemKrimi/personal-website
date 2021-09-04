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
		if (dark) window.localStorage.setItem('theme', 'light');
		else window.localStorage.setItem('theme', 'dark');

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
