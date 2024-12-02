import React from 'react';
import Document, {
    DocumentContext,
    DocumentInitialProps,
    Head,
    Html,
    Main,
    NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { ServerStyleSheets } from '@mui/styles';
import theme from '@styles/theme';

import {
    DocumentHeadTags,
    documentGetInitialProps,
} from '@mui/material-nextjs/v15-pagesRouter';

export default class MyDocument extends Document {
    static async getInitialProps(
        ctx: DocumentContext,
    ): Promise<DocumentInitialProps> {
        const styledComponentsSheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;
        const materialSheets = new ServerStyleSheets();

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: App => props =>
                        styledComponentsSheet.collectStyles(
                            materialSheets.collect(<App {...props} />),
                        ),
                });

            const initialProps = await documentGetInitialProps(ctx);

            return initialProps;
        } finally {
            styledComponentsSheet.seal();
        }
    }

    render(): JSX.Element {
        return (
            <Html lang="pt">
                <Head>
                    <meta charSet="utf-8" />
                    <meta httpEquiv="Content-Language" content="pt-br, pt" />
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link
                        rel="preconnect"
                        href="https://fonts.gstatic.com"
                        crossOrigin="anonymous"
                    />
                    <meta
                        name="viewport"
                        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
                    />
                    <meta
                        name="theme-color"
                        content={theme.palette.primary.main}
                    />

                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
                    />

                    <DocumentHeadTags emotionStyleTags={[]} {...this.props} />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
