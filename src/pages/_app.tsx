import React from 'react';
import App from 'next/app';
import wrapper from '@store/index';
import { AppCacheProvider } from '@mui/material-nextjs/v15-pagesRouter';
import RootLayout from '../templates/RootLayout';

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    }

    render() {
        const { Component, pageProps } = this.props;
        return (
            <AppCacheProvider {...this.props}>
                <RootLayout>
                    <Component {...pageProps} />
                </RootLayout>
            </AppCacheProvider>
        );
    }
}

export default wrapper.withRedux(MyApp);
