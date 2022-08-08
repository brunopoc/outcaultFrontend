import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Head from 'next/head';
import styled from 'styled-components';
import Router from 'next/router';
import { ActionsList } from '../store/ducks/user';
import { ApplicationState } from '../store';

import {
    PublicHeaderComponent,
    DefaultButtonComponent,
    InputComponent,
    CardComponent,
    FooterComponent,
    DefaultLoadingComponent,
} from '../components';
import { Container, Row } from '../styles/Grid';

const FormArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const LabelArea = styled.label`
    text-align: center;
`;

const MainContainer = styled.div`
    display: flex;
    justify-content: end;
    padding: 50px 0px;
`;

export default function Home(): JSX.Element {
    const dispatch = useDispatch();
    const emailCheck = useSelector(
        (state: ApplicationState) => state.user.session.emailStatus
    );
    const isLoading = useSelector(
        (state: ApplicationState) => state.system.loading
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

            <Container>
                <Row>
                    <MainContainer>
                        <CardComponent>
                            {isLoading ? (
                                <DefaultLoadingComponent />
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    <FormArea>
                                        <LabelArea htmlFor="email-box">
                                            Digite seu email para continuar
                                        </LabelArea>
                                        <InputComponent
                                            name="email-box"
                                            type="text"
                                            id="email-box"
                                            label="Email"
                                        />
                                        <DefaultButtonComponent type="submit">
                                            Participe Agora
                                        </DefaultButtonComponent>
                                    </FormArea>
                                </form>
                            )}
                        </CardComponent>
                    </MainContainer>
                </Row>
            </Container>

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
