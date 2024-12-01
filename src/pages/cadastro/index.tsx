import React, { useState } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { ActionsList } from '../../store/ducks/user';
import { ApplicationState } from '../../store';

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

export default function cadastro(): JSX.Element {
    const globalEmail = useSelector(
        (state: ApplicationState) => state.user.info.email,
    );

    const [emailField, setEmailField] = useState(globalEmail);
    const [password, setPassword] = useState('');
    const [nickname, setNickname] = useState('');
    const [nameField, setNameField] = useState('');

    const dispatch = useDispatch();

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(
            ActionsList.registerRequest({
                email: emailField,
                password,
                nickname,
                name: nameField,
            }),
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
                            <InputComponent
                                type="text"
                                id="name-box"
                                name="name-box"
                                value={nameField}
                                onChange={e => setNameField(e.target.value)}
                                label="Nome"
                            />
                            <InputComponent
                                type="text"
                                id="nickname-box"
                                name="nickname-box"
                                value={nickname}
                                onChange={e => setNickname(e.target.value)}
                                label="Apelido"
                            />
                            <InputComponent
                                type="text"
                                id="email-box"
                                name="email-box"
                                value={emailField}
                                onChange={e => setEmailField(e.target.value)}
                                label="Email"
                            />
                            <InputComponent
                                type="password"
                                id="password-box"
                                name="password-box"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                label="Senha"
                            />
                            <DefaultButtonComponent type="submit">
                                cadastrar
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
