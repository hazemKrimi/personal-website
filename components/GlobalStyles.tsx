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
		
		@media(max-width: 768px) {
			overflow-x: scroll;
		}

		&::-webkit-scrollbar {
			width: 0;
			height: 0; 
			background: transparent; 
		}

		&::-webkit-scrollbar-thumb {
			background: transparent;
		}

		&::selection {
			background: ${({ dark, theme }) => (dark ? theme.colors.dark.text : theme.colors.light.text)};
			color: ${({ dark, theme }) =>
				dark ? theme.colors.dark.background : theme.colors.light.background};
		}
  }

	ul, ol {
		margin-inline-start: 1.9rem;
	}

	body {
		background: ${({ dark, theme }) =>
			dark ? theme.colors.dark.background : theme.colors.light.background};
    color: ${({ dark, theme }) => (dark ? theme.colors.dark.text : theme.colors.light.text)}; 
		transition: color 250ms ease-in-out, background 250ms ease-in-out;
		scroll-behavior: smooth;
	}

	body::-webkit-scrollbar {
		width: 0.5rem !important;
	}
	
	body::-webkit-scrollbar-thumb {
		background-color: ${({ dark, theme }) =>
			dark ? theme.colors.dark.text : theme.colors.light.text} !important;
	}
`;

const GlobalStyles: FC = () => {
	const { dark } = useContext(DarkModeContext);

	return <Global dark={dark} />;
};

export default GlobalStyles;
