import { createGlobalStyle } from "styled-components";
import theme from "./theme";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Open Sans',sans-serif;
  }

  h1, h2, h3, h4, h5, h6, p, span {
    color:  ${theme.colors.default_text};

  }

  html {
    scroll-behavior: smooth;
    background: ${theme.colors.default_background};
  }

  body {
    background: ${theme.colors.default_background};
  }
`;
