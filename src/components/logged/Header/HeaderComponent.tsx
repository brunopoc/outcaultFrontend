import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { Container, Row, Column } from '../../../styles/Grid';
import { ActionsList } from '../../../store/ducks/auth';

const MainHeader = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${props => props.theme.colors.primary};
`;

const ActionArea = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
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
    &:hover {
        cursor: pointer;
    }
    &:focus {
        outline: none;
    }
`;

const MenuModal = styled.div`
    position: absolute;
    top: 50px;
    border: 1px solid white;
    padding: 10px;
    background: black;
    min-width: 200px;
`;

const ProfileArea = styled.div`
    position: relative;
`;

function HeaderComponent(): JSX.Element {
    const [menuState, setMenuState] = useState(false);
    const handleProfileMenu = () => {
        setMenuState(!menuState);
    };
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(ActionsList.logoutRequest());
    };
    return (
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
                            <ProfileArea>
                                <UserButton
                                    onClick={handleProfileMenu}
                                    type="button"
                                >
                                    BC
                                </UserButton>
                                {menuState ? (
                                    <MenuModal>
                                        <ul>
                                            <li> Meu Perfil </li>
                                            <li onClick={handleLogout}>Sair</li>
                                        </ul>
                                    </MenuModal>
                                ) : (
                                    ''
                                )}
                            </ProfileArea>
                        </ActionArea>
                    </Column>
                </Row>
            </Container>
        </MainHeader>
    );
}

export default HeaderComponent;
