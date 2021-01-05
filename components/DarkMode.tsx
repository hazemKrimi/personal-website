import { FC, useReducer, useEffect, createContext } from 'react';

export const DarkModeContext = createContext<{ dark: boolean; toggle: () => void }>({
	dark: false,
	toggle: () => {}
});

const reducer = (state: boolean, action: { type: string }) => {
	switch (action.type) {
		case 'TOGGLE':
			return !state;
		default:
			return state;
	}
};

const DarkMode: FC = ({ children }) => {
	const [dark, dispatch] = useReducer(reducer, false);
	const toggle = () => dispatch({ type: 'TOGGLE' });

	useEffect(() => {
		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) toggle();
	}, []);

	return <DarkModeContext.Provider value={{ dark, toggle }}>{children}</DarkModeContext.Provider>;
};

export default DarkMode;
