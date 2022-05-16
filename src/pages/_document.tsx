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
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../store';
import { ActionsList } from '../store/ducks/user';

export default class MyDocument extends Document {
    static async getInitialProps(
        ctx: DocumentContext
    ): Promise<DocumentInitialProps> {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: App => props =>
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

    render(): JSX.Element {
        function tokenCheck() {
            const dispatch = useDispatch();
            const token = Cookies.get('token');
            const checked = useSelector(
                (state: ApplicationState) => state.user.session.checked
            );
            if (!checked && token) {
                dispatch(ActionsList.profileRequest({ token }));
            }
        }

        return (
            <Html lang="pt">
                <Head onLoad={tokenCheck}>
                    <meta httpEquiv="Content-Language" content="pt-br, pt" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;800"
                        rel="stylesheet"
                    />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0"
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
