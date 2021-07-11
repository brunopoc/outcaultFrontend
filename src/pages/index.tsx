import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Head from 'next/head';
import styled from 'styled-components';
import Router from 'next/router';
import { ActionsList } from '../store/ducks/user';
import { ApplicationState } from '../store';
import { PublicHeaderComponent, DefaultButtonComponent } from '../components';

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
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const LabelArea = styled.label`
    text-align: center;
`;

const InputBar = styled.input`
    background-color: #5a5a5a;
    border-radius: 10px;
    color: #fff;
    padding: 5px;
    border: none;
    font-size: 14px;
    padding: 15px 30px;
    margin: 10px 0px;
    &:focus {
        outline: none;
    }
`;

export default function Home(): JSX.Element {
    const dispatch = useDispatch();
    const emailCheck = useSelector(
        (state: ApplicationState) => state.user.session.emailStatus
    );

    useEffect(() => {
        if (emailCheck === 'alreadyin') {
            Router.push('/login');
        }
        if (emailCheck === 'notIn') {
            Router.push('/cadastro');
        }
    }, [emailCheck]);

    async function handleSubmit(e) {
        e.preventDefault();
        const email = e.target[0].value;
        dispatch(ActionsList.emailCheckRequest({ email }));
    }

    return (
        <>
            <Head>
                <title>WebComics</title>
            </Head>

            <PublicHeaderComponent />

            <main>
                <LoginCard>
                    <form onSubmit={handleSubmit}>
                        <FormArea>
                            <LabelArea htmlFor="email-box">
                                Digite seu email para continuar
                            </LabelArea>
                            <InputBar type="text" id="email-box" />
                            <DefaultButtonComponent type="submit">
                                Participe Agora
                            </DefaultButtonComponent>
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
