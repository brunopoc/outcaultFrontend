import styled from 'styled-components';

function getWidthGrid(value) {
    if (!value) return '';

    const width = (parseInt(value, 10) / 12) * 100;
    return `width: ${width}%`;
}

export const Container = styled.div`
    max-width: 1360px;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    box-sizing: border-box;
    width: 100%;
    height: auto;
    &:before,
    &:after {
        content: ' ';
        display: table;
    }
    &:after {
        clear: both;
    }
`;

export const Row = styled.div`
    width: 100%;
    height: auto;
    float: left;
    box-sizing: border-box;
    &:before,
    &:after {
        content: ' ';
        display: table;
    }
    &:after {
        clear: both;
    }
`;

export const Column = styled.div<{
    desktop: string;
    tablet: string;
    mobile: string;
}>`
    float: left;
    padding: 0.25rem;
    min-height: 1px;
    box-sizing: border-box;
    width: 100%;

    @media only screen and (max-width: 768px) {
        ${props => props.mobile && getWidthGrid(props.mobile)};
    }

    @media only screen and (min-width: 768px) {
        ${props => props.tablet && getWidthGrid(props.tablet)};
    }

    @media only screen and (min-width: 1024px) {
        ${props => props.desktop && getWidthGrid(props.desktop)};
    }
`;
