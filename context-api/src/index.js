import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { CartContextProvider } from "./contexts/CartContext";
import { ThemeContextProvider } from "./contexts/ThemeContext";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <CartContextProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </CartContextProvider>
  </StrictMode>,
  rootElement
);
