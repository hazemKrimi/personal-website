import { useEffect } from 'react';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import { useRouter } from 'next/router';

import Nav from '../components/Nav';
import Theme from '../styles/theme';
import Container from '../components/Container';
import GlobalStyles from '../components/GlobalStyles';
import SharedStyles from '../styles/shared';
import Footer from '../components/Footer';

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

import { initStyles } from '../utils/styles';

NProgress.configure({ showSpinner: false });

const App = ({ Component, pageProps }: AppProps) => {
	const router = useRouter();

	useEffect(() => {
		router.events.on('routeChangeStart', () => {
			NProgress.start();
		});

		router.events.on('routeChangeComplete', () => {
			NProgress.done();
		});

		router.events.on('routeChangeError', () => {
			NProgress.done();
		});
	}, []);

	return (
		<>
			<Script
				id='styles-init'
				strategy='afterInteractive'
				dangerouslySetInnerHTML={{
					__html: initStyles()
				}}
			/>
			<Head>
				<link rel='shortcut icon' href='light-favicon.png' id='light-favicon'></link>
				<link rel='shortcut icon' href='dark-favicon.png' id='dark-favicon'></link>
				<link rel='preconnect' href='https://fonts.gstatic.com' />
				<link
					href='https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;700&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<Theme>
				<SharedStyles>
					<GlobalStyles />
					<Container>
						<Nav />
						<Component {...pageProps} />
						<Footer />
					</Container>
				</SharedStyles>
			</Theme>
		</>
	);
};

export default App;
