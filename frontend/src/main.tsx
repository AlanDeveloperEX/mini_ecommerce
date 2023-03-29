import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import theme from "./global/styles/theme";
import App from "./App";
import { ShoppingCartProvider } from "./context/CartContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider theme={theme}>
    <ShoppingCartProvider>
      <App />
    </ShoppingCartProvider>
  </ThemeProvider>
);
