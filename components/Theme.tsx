import { FC } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';

const Theme: FC = ({ children }) => {
	// TODO: put theme colors in css custom properties and put common colors here.
	const theme: DefaultTheme = {
		colors: {
			dark: {
				background: '#262626',
				text: 'white'
			},
			light: {
				background: '#F9F9F9',
				text: 'black'
			}
		}
	};

	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
