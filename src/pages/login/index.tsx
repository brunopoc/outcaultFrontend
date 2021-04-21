import React, { useState } from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import { Container, Row } from '../../styles/Grid';

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
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const LabelArea = styled.label`
    text-align: center;
    margin-top: 15px;
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
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        console.log(email, password);
        const resp = await fetch(`http://localhost:4000/api/v1/user/singin`, {
            method: 'post',
            body: JSON.stringify({ email, password }, null, 2),
            headers: new Headers({
                'content-type': 'application/json',
            }),
        });
        const data = await resp.json();
        console.log(data);
        return '';
    }
    return (
        <>
            <Head>
                <title>WebComics</title>
            </Head>

            <main>
                <LoginCard>
                    <form onSubmit={handleSubmit}>
                        <FormArea>
                            <LabelArea htmlFor="email-box">Email:</LabelArea>
                            <InputBar
                                type="text"
                                id="email-box"
                                onChange={e => setEmail(e.target.value)}
                            />
                            <LabelArea htmlFor="password-box">Senha:</LabelArea>
                            <InputBar
                                type="password"
                                id="password-box"
                                onChange={e => setPassword(e.target.value)}
                            />
                            <button>entrar</button>
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
