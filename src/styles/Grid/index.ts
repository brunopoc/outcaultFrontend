import styled from 'styled-components';

type grid = {
    desktop: string;
    tablet: string;
    mobile: string;
};

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

export const Column = styled.div`
    float: left;
    padding: 0.25rem;
    min-height: 1px;
    box-sizing: border-box;
    width: 100%;

    @media only screen and (max-width: 768px) {
        ${({ mobile }: grid) => mobile && getWidthGrid(mobile)};
    }

    @media only screen and (min-width: 768px) {
        ${({ tablet }: grid) => tablet && getWidthGrid(tablet)};
    }

    @media only screen and (min-width: 1024px) {
        ${({ desktop }: grid) => desktop && getWidthGrid(desktop)};
    }
`;
