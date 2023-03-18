import { useEffect } from 'react';

import type { AppProps } from 'next/app';
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

import { pageview } from '../utils/gtag';
import { initStyles } from '../utils/styles';

NProgress.configure({ showSpinner: false });

const App = ({ Component, pageProps }: AppProps) => {
	const router = useRouter();

	useEffect(() => {
		router.events.on('routeChangeStart', () => {
			NProgress.start();
		});

		router.events.on('routeChangeComplete', url => {
			NProgress.done();
			pageview(url);
		});

		router.events.on('routeChangeError', () => {
			NProgress.done();
		});

		return () => {
			router.events.off('routeChangeComplete', url => {
				pageview(url);
			});
		};
	}, [router.events]);

	return (
		<>
			<Script
				id='styles-init'
				strategy='afterInteractive'
				dangerouslySetInnerHTML={{
					__html: initStyles()
				}}
			/>
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
