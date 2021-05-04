import { createGlobalStyle } from 'styled-components';
import * as variables from './variables';


const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%; 
    
    @media(max-width: ${variables.breakpoints.md}) {
      font-size: 56.25%;
    }

    @media(max-width: ${variables.breakpoints.sm}) {
      font-size: 50%;
    }
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