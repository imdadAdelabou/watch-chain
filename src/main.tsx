import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import theme from "./theme.ts";
import { Networks, XRPLClient } from "@nice-xrpl/react-xrpl";
import store from "./store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <XRPLClient network={Networks.Testnet}>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </XRPLClient>
    </Provider>
  </React.StrictMode>
);
