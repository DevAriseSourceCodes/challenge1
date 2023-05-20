import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={{}}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
