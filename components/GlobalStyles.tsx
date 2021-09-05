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
		font-size: 16px;
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
			background: var(--text);
			color: var(--background);
		}
  }

	html {
		position: relative;
		min-height: 100%;
	}
	
	ul, ol {
		margin-inline-start: 1.9rem;
	}

	body {
		margin: 0 0 100px;
		background: var(--background);
    color: var(--text); 
		transition: color 250ms ease-in-out, background 250ms ease-in-out;
		scroll-behavior: smooth;

		#nprogress .bar {
			background: var(--text) !important;
		}

		#nprogress .peg {
			box-shadow: 0 0 10px var(--text), 0 0 5px var(--text) !important;
		}
	}

	body::-webkit-scrollbar {
		width: 0.5rem !important;
	}
	
	body::-webkit-scrollbar-thumb {
		background-color: var(--text) !important;
	}
`;

const GlobalStyles: FC = () => {
	const { dark } = useContext(DarkModeContext);

	return <Global dark={dark} />;
};

export default GlobalStyles;
