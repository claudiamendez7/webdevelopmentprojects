import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ThemeProvider from "@hooks/useDarkTheme";
import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
      <App />
  </ThemeProvider>
);