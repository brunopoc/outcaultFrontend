import React from 'react';
import Head from 'next/head';
import { HeaderComponent } from '../../components';

export default function Home(): JSX.Element {
    return (
        <div>
            <Head>
                <title>WebComics</title>
            </Head>

            <HeaderComponent />

            <main>Content</main>

            <footer>Footer</footer>
        </div>
    );
}
