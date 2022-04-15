import React, { ReactChild, ReactChildren } from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
    width: 100vw;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.colors.text};
    position: absolute;
    bottom: 0px;
    left: 0px;
`;

type Props = {
    children: ReactChild | ReactChildren;
};

export default function FooterComponent({ children }: Props): JSX.Element {
    return <Footer>{children}</Footer>;
}
