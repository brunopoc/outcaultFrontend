import React, { ReactChild, ReactChildren } from 'react';
import styled from 'styled-components';

const ButtonTemplate = styled.button`
    background-color: #2e0078;
    border-radius: 20px;
    color: #fff;
    padding: 15px 30px;
    border: none;
    font-size: 16px;
    text-transform: uppercase;
    &:hover {
        cursor: pointer;
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
