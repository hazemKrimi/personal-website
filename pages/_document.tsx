import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';

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
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel='shortcut icon'
            href='/light-favicon.png'
            id='light-favicon'
          ></link>
          <link
            rel='shortcut icon'
            href='/dark-favicon.png'
            id='dark-favicon'
          ></link>
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;700&display=swap'
            rel='stylesheet'
          />
          <script
            src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_KEY}`}
          />
          <script
            id='analytics-init'
            dangerouslySetInnerHTML={{
              __html: initAnalytics(),
            }}
          />
          <script
            id='styles-init'
            dangerouslySetInnerHTML={{
              __html: initStyles(),
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
