import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%; 
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    width: 100%;
    margin: 0;
  }

  p {
    font-size: 16px;
  }

  ul {
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyle;