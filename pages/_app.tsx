import { useEffect } from 'react';

import type { AppProps } from 'next/app';
import Script from 'next/script';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Nav from '../components/Nav';
import Theme from '../styles/theme';
import Container from '../components/Container';
import GlobalStyles from '../components/GlobalStyles';
import SharedStyles from '../styles/shared';
import Footer from '../components/Footer';

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

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
					__html: `
						function getInitialThemeMode() {
							const persistedColorPreference = window.localStorage.getItem('mode');
							const hasPersistedPreference = typeof persistedColorPreference === 'string';

							if (hasPersistedPreference) {
								return persistedColorPreference;
							}

							const mql = window.matchMedia('(prefers-color-scheme: dark)');
							const hasMediaQueryPreference = typeof mql.matches === 'boolean';

							if (hasMediaQueryPreference) {
								return mql.matches ? 'dark' : 'light';
							}

							return 'light';
						}

						(() => {
							const mode = getInitialThemeMode();
							const root = document.documentElement;
							const lightFavicon = document.querySelector('link#light-favicon');
							const darkFavicon = document.querySelector('link#dark-favicon');

							root.style.setProperty('--mode', mode);
							root.style.setProperty(
								'--background',
								mode === 'light' ? '#F9F9F9' : '#262626'
							);
							root.style.setProperty(
								'--secondary-background',
								mode === 'light' ? 'white' : '#2F2F2F'
							);
							root.style.setProperty(
								'--text',
								mode === 'light' ? 'black' : 'white'
							);
							root.style.setProperty(
								'--text-inverted',
								mode === 'light' ? 'white' : 'black'
							);
							document.head.append(mode === 'light' ? darkFavicon : lightFavicon);
						})();
					`
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
