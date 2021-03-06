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
    PublicHeaderComponent,
} from '../../components';

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

const ButtonContainer = styled.div`
    margin: 24px 0px;
`;

const LinkContainer = styled.a`
    margin: 24px 0px;
    color: ${props => props.theme.colors.link};
    transition: all, 0.2s;
    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
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

            <PublicHeaderComponent />

            <main>
                <Container>
                    <Row>
                        <MainArea>
                            <CardComponent>
                                <>
                                    <form onSubmit={handleSubmit}>
                                        <FormArea>
                                            <InputComponent
                                                type="text"
                                                name="emailBox"
                                                id="email-box"
                                                onChange={e =>
                                                    setEmail(e.target.value)
                                                }
                                                value={email}
                                                label="Email"
                                            />
                                            <InputComponent
                                                type="password"
                                                name="passwordBox"
                                                id="password-box"
                                                label="Senha"
                                            />
                                            <ButtonContainer>
                                                <DefaultButtonComponent type="submit">
                                                    entrar
                                                </DefaultButtonComponent>
                                            </ButtonContainer>
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

            <Container>
                <Row>
                    <FooterComponent>ComicBook - Alpha Version</FooterComponent>
                </Row>
            </Container>
        </>
    );
}
