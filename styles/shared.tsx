import { ThemeProvider, DefaultTheme } from 'styled-components';

const Shared = ({ children }: { children: React.ReactNode }) => {
	const theme: DefaultTheme = {
		colors: {
			dark: {
				background: '#262626',
				text: 'white'
			},
			light: {
				background: '#F9F9F9',
				text: 'black'
			},
			blue: '#1573CA'
		}
	};

	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Shared;
