import React, { ReactChild, ReactChildren } from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #aeaeae;
`;

type Props = {
    children: ReactChild | ReactChildren;
};

export default function FooterComponent({ children }: Props): JSX.Element {
    return <Footer>{children}</Footer>;
}
