import React from 'react';
import styled from 'styled-components';
import { Container, Row, Column } from '../../../styles/Grid';

const MainHeader = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 20px;
    background-color: ${props => props.theme.colors.background.secondary};
    border-bottom: 1px solid;
    border-color: ${props => props.theme.colors.border.light};
`;

const LogoImage = styled.img`
    height: 80px;
`;

const HeaderComponent = (): JSX.Element => (
    <MainHeader>
        <Container>
            <Row>
                <Column mobile="12" tablet="12" desktop="2">
                    <LogoImage src="/img/logo.png" alt="Logo da ComicsBook" />
                </Column>
            </Row>
        </Container>
    </MainHeader>
);

export default HeaderComponent;
