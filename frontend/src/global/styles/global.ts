import { createGlobalStyle } from "styled-components";
import theme from "./theme";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Roboto Medium',sans-serif;
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
