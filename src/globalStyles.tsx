import { createGlobalStyle } from "styled-components";
import "@fontsource/cinzel-decorative";
import "@fontsource/raleway";

const GlobalStyle = createGlobalStyle`
  *, ::before, ::after {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    font-family: "Raleway", sans-serif;
    font-size: 1.25rem;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  a, a:active, a:visited { 
    color: inherit;
    text-decoration: none;
  }

  h1 {
    font-family: "Cinzel Decorative";
  }

  button {
    font-family: inherit;
    border: none;
    font-size: inherit;
  };
`;

export default GlobalStyle;
