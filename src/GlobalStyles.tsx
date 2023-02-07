import { createGlobalStyle } from "styled-components";
import "@fontsource/cinzel-decorative";
import "@fontsource/raleway";

const GlobalStyles = createGlobalStyle`
  *, ::before, ::after {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    font-family: "Raleway", sans-serif;
    font-size: 1.25rem;
    background-color: #2b2f3b;
    color:#fff
  }

  ul {
    list-style: none;
    padding: 0;
  }

  a, a:active, a:visited { 
    color: inherit;
    text-decoration: none;
  }

  button {
    font-family: inherit;
    border: none;
    font-size: inherit;
    background-color: transparent;
  };
`;

export default GlobalStyles;
