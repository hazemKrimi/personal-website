import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class Doc extends Document {
	static async getInitialProps(ctx: any) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App: any) => (props: any) => sheet.collectStyles(<App {...props} />)
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				)
			};
		} finally {
			sheet.seal();
		}
	}

	render() {
		return (
			<Html>
				<Head>
					<link rel='shortcut icon' href='light-favicon.png' id='light-favicon'></link>
					<link rel='shortcut icon' href='dark-favicon.png' id='dark-favicon'></link>
					<script async src='https://www.googletagmanager.com/gtag/js?id=G-FMD81GLKS3'></script>
					<script
						dangerouslySetInnerHTML={{
							__html: `
								window.dataLayer = window.dataLayer || [];
								function gtag(){dataLayer.push(arguments);}
								gtag('js', new Date());
							
								gtag('config', 'G-FMD81GLKS3');
							`
						}}
					/>
					<script
						dangerouslySetInnerHTML={{
							__html: `
								function getInitialTheme() {
									const persistedColorPreference = window.localStorage.getItem('theme');
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
									const theme = getInitialTheme();
									const root = document.documentElement;
									const lightFavicon = document.querySelector('link#light-favicon');
									const darkFavicon = document.querySelector('link#dark-favicon');

									root.style.setProperty('--theme', theme);
									root.style.setProperty(
										'--background',
										theme === 'light' ? '#F9F9F9' : '#262626'
									);
									root.style.setProperty(
										'--secondary-background',
										theme === 'light' ? 'white' : '#2F2F2F'
									);
									root.style.setProperty(
										'--text',
										theme === 'light' ? 'black' : 'white'
									);
									root.style.setProperty(
										'--text-inverted',
										theme === 'light' ? 'white' : 'black'
									);
									document.head.append(theme === 'light' ? darkFavicon : lightFavicon);
								})();
							`
						}}
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default Doc;
