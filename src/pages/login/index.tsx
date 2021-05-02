import React, { useState } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { ActionsList } from '../../store/ducks/user';
import { onlyNotAuth } from '../../utils/auth';

import { Container, Row } from '../../styles/Grid';
import { ApplicationState } from '../../store';

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

export default function Login(): JSX.Element {
    onlyNotAuth();
    const globalEmail = useSelector(
        (state: ApplicationState) => state.user.info.email
    );

    const [emailField, setEmailField] = useState(globalEmail);
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    async function handleSubmit(e) {
        e.preventDefault();
        dispatch(ActionsList.loginRequest({ email: emailField, password }));
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
                                value={emailField}
                                onChange={e => setEmailField(e.target.value)}
                            />
                            <LabelArea htmlFor="password-box">Senha:</LabelArea>
                            <InputBar
                                type="password"
                                id="password-box"
                                onChange={e => setPassword(e.target.value)}
                            />
                            <button type="submit">entrar</button>
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
