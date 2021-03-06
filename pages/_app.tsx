import type { AppProps } from 'next/app';
import Head from 'next/head';
import Nav from '../components/Nav';
import DarkMode from '../components/DarkMode';
import Container from '../components/Container';
import GlobalStyles from '../components/GlobalStyles';
import Theme from '../components/Theme';
import Footer from '../components/Footer';

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Head>
				<link rel='preconnect' href='https://fonts.gstatic.com' />
				<link
					href='https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;700&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<DarkMode>
				<Theme>
					<GlobalStyles />
					<Container>
						<Nav />
						<Component {...pageProps} />
						<Footer />
					</Container>
				</Theme>
			</DarkMode>
		</>
	);
};

export default App;
