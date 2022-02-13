import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

import { ServerStyleSheet } from 'styled-components';

import { GOOGLE_ANALYTICS_KEY, initAnalytics } from '../utils/gtag';
import { initStyles } from '../utils/styles';

class Doc extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
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
					<Script
						strategy='afterInteractive'
						src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_KEY}`}
					/>
					<Script
						id='google-analytics'
						strategy='afterInteractive'
						dangerouslySetInnerHTML={{
							__html: initAnalytics()
						}}
					/>
					<script
						id='styles-init'
						dangerouslySetInnerHTML={{
							__html: initStyles()
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
