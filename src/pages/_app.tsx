import React from 'react';
import App from 'next/app';
import { ThemeProvider } from '@mui/styles';
import theme from '@styles/theme';
import CssBaseline from '@mui/material/CssBaseline';
import wrapper from '@store/index';

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
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Component {...pageProps} />
            </ThemeProvider>
        );
    }
}

export default wrapper.withRedux(MyApp);
