import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${props => props.theme.colors.background.primary};
        color: ${props => props.theme.colors.text};
        font: 400 16px 'Roboto', sans-serif;
        position: relative;
        min-height: 100vh;
        padding-bottom: 100px;
    }
`;
