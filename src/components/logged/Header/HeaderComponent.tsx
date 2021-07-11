import React from 'react';
import styled from 'styled-components';
import { Container, Row, Column } from '../../../styles/Grid';

const MainHeader = styled.header`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${props => props.theme.colors.primary};
`;

const ActionArea = styled.div`
    display: flex;
    justify-content: space-between;
`;

const MenuArea = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const MenuList = styled.ul`
    list-style-type: none;
`;

const MenuItem = styled.li`
    display: inline;
    margin: 10px;
`;

const SearchBar = styled.input`
    background-color: #4b4b4b;
    border-radius: 10px;
    color: #fff;
    padding: 5px;
    border: none;
    width: 100%;
    font-size: 14px;
    &:focus {
        outline: none;
    }
`;

const UserButton = styled.button`
    border-radius: 100%;
    background-color: #764eac;
    border: 1px solid white;
    width: 40px;
    height: 40px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    &:focus {
        outline: none;
    }
`;

const HeaderComponent = (): JSX.Element => (
    <MainHeader>
        <Container>
            <Row>
                <Column mobile="12" tablet="12" desktop="2">
                    <img src="/img/logo.png" alt="Logo da ComicsBook" />
                </Column>
                <Column mobile="12" tablet="12" desktop="10">
                    <ActionArea>
                        <MenuArea>
                            <MenuList>
                                <MenuItem>Artistas</MenuItem>
                                <MenuItem>Categorias</MenuItem>
                            </MenuList>
                        </MenuArea>
                        <SearchBar type="text" />
                        <UserButton type="button">BC</UserButton>
                    </ActionArea>
                </Column>
            </Row>
        </Container>
    </MainHeader>
);

export default HeaderComponent;
