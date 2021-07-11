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

export default function cadastro(): JSX.Element {
    onlyNotAuth();
    const globalEmail = useSelector(
        (state: ApplicationState) => state.user.info.email
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
                            <LabelArea htmlFor="email-box">Nome:</LabelArea>
                            <InputComponent
                                type="text"
                                id="name-box"
                                value={nameField}
                                onChange={e => setNameField(e.target.value)}
                            />
                            <LabelArea htmlFor="email-box">Apelido:</LabelArea>
                            <InputComponent
                                type="text"
                                id="nickname-box"
                                value={nickname}
                                onChange={e => setNickname(e.target.value)}
                            />
                            <LabelArea htmlFor="email-box">Email:</LabelArea>
                            <InputComponent
                                type="text"
                                id="email-box"
                                value={emailField}
                                onChange={e => setEmailField(e.target.value)}
                            />
                            <LabelArea htmlFor="password-box">Senha:</LabelArea>
                            <InputComponent
                                type="password"
                                id="password-box"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
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
