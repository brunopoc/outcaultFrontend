import React, { useState } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { ActionsList } from '../../store/ducks/user';
import { ApplicationState } from '../../store';
import { onlyNotAuth } from '../../utils/auth';

import { Container, Row } from '../../styles/Grid';
import {
    CardComponent,
    DefaultButtonComponent,
    InputComponent,
    FooterComponent,
} from '../../components';

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

export default function Login(): JSX.Element {
    onlyNotAuth();

    const userEmail =
        useSelector((state: ApplicationState) => state.user.info.email) || '';

    const [email, setEmail] = useState(userEmail);

    const dispatch = useDispatch();

    function handleSubmit(e) {
        e.preventDefault();
        const [emailBox, passwordBox] = e.target.elements;
        dispatch(
            ActionsList.loginRequest({
                email: emailBox.value,
                password: passwordBox.value,
            })
        );
    }

    return (
        <>
            <Head>
                <title>WebComics</title>
            </Head>

            <main>
                <CardComponent>
                    <form onSubmit={handleSubmit}>
                        <FormArea>
                            <LabelArea htmlFor="email-box">Email:</LabelArea>
                            <InputComponent
                                type="text"
                                name="emailBox"
                                id="email-box"
                                onChange={e => setEmail(e.target.value)}
                                value={email}
                            />
                            <LabelArea htmlFor="password-box">Senha:</LabelArea>
                            <InputComponent
                                type="password"
                                name="passwordBox"
                                id="password-box"
                            />
                            <DefaultButtonComponent type="submit">
                                entrar
                            </DefaultButtonComponent>
                        </FormArea>
                    </form>
                </CardComponent>
            </main>

            <Container>
                <Row>
                    <FooterComponent>
                        Web Comics - Alpha Version
                    </FooterComponent>
                </Row>
            </Container>
        </>
    );
}
