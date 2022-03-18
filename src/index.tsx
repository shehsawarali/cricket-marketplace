import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { defineCustomElements } from "@ionic/pwa-elements/loader";
import { UIProvider } from "./context/UIContext";

ReactDOM.render(
  <UIProvider>
    <App />
  </UIProvider>,
  document.getElementById("root")
);

defineCustomElements(window);
