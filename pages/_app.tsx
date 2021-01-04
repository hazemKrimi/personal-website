import type { AppProps } from 'next/app';
import styled, { createGlobalStyle } from 'styled-components';
import Head from 'next/head';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
		font-family: 'Source Code Pro', monospace;
		font-size: '17px';
  }
`;

const Container = styled.div`
	width: 85%;
	margin: auto;
`;

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Head>
				<link rel='preconnect' href='https://fonts.gstatic.com' />
				<link
					href='https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;700&display=swap'
					rel='stylesheet'
				/>
				<title>Hazem Krimi</title>
			</Head>
			<GlobalStyle />
			<Container>
				<Component {...pageProps} />
			</Container>
		</>
	);
};

export default App;
