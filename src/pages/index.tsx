import { useSelector } from 'react-redux';
import Head from 'next/head';
import styled from 'styled-components';
import { ApplicationState } from '@store/index';

import { Container, Row } from '@styles/Grid';
import {
    PublicHeaderComponent,
    DefaultButtonComponent,
    InputComponent,
    CardComponent,
    FooterComponent,
    DefaultLoadingComponent,
} from '../components';

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
    const isLoading = useSelector(
        (state: ApplicationState) => state.system.loading,
    );

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
                                <form>
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
