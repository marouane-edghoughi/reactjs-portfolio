import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
    
    /*
        Color palette:
        Background:           #030303
        Blocks:               #0f0f0f   272727
        Titles:               #F3F2F3
        Text:                 #9C9D9B
        Gradient( Logo ):     384BEB    8600DA
    */

    * {
        box-sizing: border-box;
    }

    html {
        background-color: #0f0f0f;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
    }

    .theme {
        background-color: #0f0f0f;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        color: #9C9D9B;
    }

    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    h2 {
        color: #F3F2F3;
    }

    // Custom Scrollbars

    ::-webkit-scrollbar {
        width: 15px;
    }

    ::-webkit-scrollbar-track {
        background: #0f0f0f;
    }

    ::-webkit-scrollbar-thumb {
        background: #9C9D9B;
        border-radius: 25px;
        border: 4px solid #0f0f0f;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #7d7e7c;
    }

    .noselect {
        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none; /* Non-prefixed version, currently supported by Chrome, Opera and Firefox */
    }
`;

export default GlobalStyle;

export const InternalLink = styled(Link)`
    color: #2086e7;
    text-decoration: none;

    :hover {
        color: #066dcd;
    }
`;

export const ExternalLink = styled.a`
    color: #2086e7;
    text-decoration: none;

    :hover {
        color: #066dcd;
    }
`;