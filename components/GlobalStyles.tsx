import { FC, useContext } from 'react';
import { createGlobalStyle } from 'styled-components';
import { DarkModeContext } from '../components/DarkMode';
interface Props {
	dark: boolean;
}

const Global = createGlobalStyle<Props>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
		font-family: 'Source Code Pro', monospace;
		font-size: 17px;
		line-height: 1.5;
		outline: none;
		user-select: text;
		-webkit-tap-highlight-color: rgba(255, 255, 255, 0);

		&::selection {
			background: ${({ dark, theme }) => (dark ? theme.colors.dark.text : theme.colors.light.text)};
			color: ${({ dark, theme }) =>
				dark ? theme.colors.dark.background : theme.colors.light.background};
		}
  }

	body {
		background: ${({ dark, theme }) =>
			dark ? theme.colors.dark.background : theme.colors.light.background};
    color: ${({ dark, theme }) => (dark ? theme.colors.dark.text : theme.colors.light.text)}; 
		transition: color 250ms ease-in-out, background 250ms ease-in-out;
		scroll-behavior: smooth;
	}

	body::-webkit-scrollbar {
		width: 0.5rem;
	}
	
	body::-webkit-scrollbar-thumb {
		background-color: ${({ dark, theme }) => (dark ? theme.colors.dark.text : theme.colors.light.text)};
	}
`;

const GlobalStyles: FC = () => {
	const { dark } = useContext(DarkModeContext);

	return <Global dark={dark} />;
};

export default GlobalStyles;
