import { createGlobalStyle } from "styled-components";
import theme from "./theme";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;500;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Open Sans',sans-serif;
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
