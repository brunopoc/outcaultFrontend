import React, { ReactChildren, ReactChild } from 'react';
import styled from 'styled-components';

const CardTemplate = styled.div`
    max-width: 400px;
    max-height: 500px;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    padding: 32px 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    align-items: center;
    background-color: ${props => props.theme.colors.background.secondary};
`;

type Props = {
    children: ReactChild | ReactChildren;
};

export default function CardComponent({ children }: Props): JSX.Element {
    return <CardTemplate>{children}</CardTemplate>;
}
