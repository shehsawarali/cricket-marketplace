import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { defineCustomElements } from "@ionic/pwa-elements/loader";
import { UIProvider } from "./context/UIContext";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <UIProvider>
      <App />
    </UIProvider>
  </QueryClientProvider>,
  document.getElementById("root")
);

defineCustomElements(window);
