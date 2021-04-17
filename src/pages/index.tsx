import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

const MainHeader = styled.header`
    width: 100%;
    height: 200px;
    border-bottom: 1px solid ${props => props.theme.colors.primary};
`;

const Container = styled.div`
    max-width: 1080px;
    width: 100%;
    height: 100%;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export default function Home(): JSX.Element {
    return (
        <div>
            <Head>
                <title>WebComics</title>
            </Head>

            <MainHeader>
                <Container>
                    <div>Logo</div>
                    <div>Menu</div>
                </Container>
            </MainHeader>

            <main>Content</main>

            <footer>Footer</footer>
        </div>
    );
}
