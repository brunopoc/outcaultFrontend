import React, { ReactChild, ReactChildren } from 'react';
import styled from 'styled-components';

const ButtonTemplate = styled.button`
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
    padding: 16px 32px;
    border: none;
    font-size: 16px;
    text-transform: uppercase;
    transition: all 0.2s;
    &:hover {
        cursor: pointer;
        background-color: ${props => props.theme.colors.primarySelected};
    }
    &:focus {
        outline: none;
    }
`;

type Props = {
    children: ReactChild | ReactChildren;
    type: 'button' | 'submit' | 'reset';
};

export default function DefaultButtonComponent({
    children,
    type,
}: Props): JSX.Element {
    return <ButtonTemplate type={type}>{children}</ButtonTemplate>;
}
