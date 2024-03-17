import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { MetaMaskProvider } from "@metamask/sdk-react";

import theme from "./theme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
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
  </React.StrictMode>
);
