import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import { Container, Row } from '../styles/Grid';

const Footer = styled.footer`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #aeaeae;
`;

const LoginCard = styled.div`
    width: 400px;
    height: 500px;
    margin: 180px auto;
    border: 1px solid #7d7d7d;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-self: center;
    align-items: center;
`;

const FormArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LabelArea = styled.label`
    text-align: center;
`;

const InputBar = styled.input`
    background-color: #4b4b4b;
    border-radius: 10px;
    color: #fff;
    padding: 5px;
    border: none;
    font-size: 14px;
    margin-top: 10px;
    &:focus {
        outline: none;
    }
`;

export default function Home(): JSX.Element {
    return (
        <>
            <Head>
                <title>WebComics</title>
            </Head>

            <main>
                <LoginCard>
                    <form action="">
                        <FormArea>
                            <LabelArea htmlFor="email-box">
                                Digite seu email para continuar
                            </LabelArea>
                            <InputBar type="text" id="email-box" />
                        </FormArea>
                    </form>
                </LoginCard>
            </main>

            <Container>
                <Row>
                    <Footer>Web Comics - Alpha Version</Footer>
                </Row>
            </Container>
        </>
    );
}
