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
    color: ${theme.colors.default_text};

  }

  html {
    scroll-behavior: smooth;
    background: ${theme.colors.default_background};
  }

  body {
    background: ${theme.colors.default_background};
  }

  /* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: auto;
    scrollbar-color: ${theme.colors.default_blue} ${theme.colors.default_white};
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 16px;
  }

  *::-webkit-scrollbar-track {
    background: ${theme.colors.default_white};
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.default_blue};
    border: 3px solid ${theme.colors.default_white};
  }
`;
