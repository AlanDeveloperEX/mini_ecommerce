import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import theme from "./global/styles/theme";
import App from "./App";
import { ShoppingCartProvider } from "./context/CartContext";
import { ProductsProvider } from "./context/ProductsContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider theme={theme}>
    <ProductsProvider>
      <ShoppingCartProvider>
        <App />
      </ShoppingCartProvider>
    </ProductsProvider>
  </ThemeProvider>
);
