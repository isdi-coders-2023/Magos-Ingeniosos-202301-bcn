import { createGlobalStyle } from "styled-components";
import "@fontsource/cinzel-decorative";
import "@fontsource/raleway";

const GlobalStyles = createGlobalStyle`

  :root {
    --primaryColor: #2b2f3b;
    --accentColor: #eb7d00;
    --primaryFont: "Raleway", sans-serif;
    --displayFont: "Cinzel Decorative", fantasy;
  }

  *, ::before, ::after {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    font-family: var(--primaryFont);
    font-size: 1.25rem;
    background-color: var(--primaryColor);
    color:#fff
  }

  h1, h2 {
    margin: 0;
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
