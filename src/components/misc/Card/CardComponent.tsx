import React, { ReactChildren, ReactChild } from 'react';
import styled from 'styled-components';

const CardTemplate = styled.div`
    width: 400px;
    height: 500px;
    margin: 180px auto;
    border: 1px solid #7d7d7d;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-self: center;
    align-items: center;
`;

type Props = {
    children: ReactChild | ReactChildren;
};

export default function CardComponent({ children }: Props): JSX.Element {
    return <CardTemplate>{children}</CardTemplate>;
}
