import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { MetaMaskProvider } from "@metamask/sdk-react";
import { Provider } from "react-redux";

import { PrimeReactProvider, PrimeReactContext } from "primereact/api";

import theme from "./theme.ts";
import { Networks, XRPLClient } from "@nice-xrpl/react-xrpl";
import store from "./store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <XRPLClient network={Networks.Testnet}>
        <MetaMaskProvider
          debug={true}
          sdkOptions={{
            dappMetadata: { name: "Watch-chain", url: window.location.href },
          }}
        >
          <ChakraProvider theme={theme}>
            <App />
          </ChakraProvider>
        </MetaMaskProvider>
      </XRPLClient>
    </Provider>
  </React.StrictMode>
);
