import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat:400');

    *, *::before, *::after {
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        background-color: #f1f3f7;
        font-size: 1.6rem;
        color: #333;
        font-family: 'Montserrat', sans-serif;
    }
`;

export default GlobalStyle;
