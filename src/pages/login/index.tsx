import React, { useState } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { ActionsList } from '@store/ducks/auth';
import { ApplicationState } from '@store/index';

import { TextField } from '@mui/material';

import { Container, Row } from '@styles/Grid';
import { CardComponent, HeaderComponent } from '../../components';

const FormArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const MainArea = styled.div`
    display: flex;
    justify-content: end;
    margin: 100px 0px 200px 0px;
`;

const LinkContainer = styled.a`
    margin: 24px 0px;
    color: #fff;
    transition: all, 0.2s;
    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`;

export default function Login(): JSX.Element {
    const userEmail =
        useSelector((state: ApplicationState) => state.auth?.info?.email) || '';

    const [email, setEmail] = useState(userEmail);

    const dispatch = useDispatch();

    function handleSubmit(e) {
        e.preventDefault();
        const [emailBox, passwordBox] = e.target.elements;
        dispatch(
            ActionsList.loginRequest({
                email: emailBox.value,
                password: passwordBox.value,
            }),
        );
    }

    return (
        <>
            <Head>
                <title>WebComics</title>
            </Head>

            <HeaderComponent />

            <main>
                <Container>
                    <Row>
                        <MainArea>
                            <CardComponent>
                                <>
                                    <form onSubmit={handleSubmit}>
                                        <FormArea>
                                            <TextField
                                                variant="outlined"
                                                type="text"
                                                name="emailBox"
                                                id="email-box"
                                                onChange={e =>
                                                    setEmail(e.target.value)
                                                }
                                                value={email}
                                                label="Email"
                                            />
                                            <TextField
                                                variant="outlined"
                                                type="password"
                                                name="passwordBox"
                                                id="password-box"
                                                label="Senha"
                                            />
                                        </FormArea>
                                    </form>
                                    <LinkContainer>
                                        Esqueci minha senha
                                    </LinkContainer>
                                </>
                            </CardComponent>
                        </MainArea>
                    </Row>
                </Container>
            </main>
        </>
    );
}
