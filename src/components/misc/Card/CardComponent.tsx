import React, { ReactNode } from 'react';
import styled from 'styled-components';

const CardTemplate = styled.div`
    width: 100%;
    height: 100%;
    padding: 32px 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    align-items: center;
`;

type Props = {
    children: ReactNode;
};

export default function CardComponent({ children }: Props): JSX.Element {
    return <CardTemplate>{children}</CardTemplate>;
}
