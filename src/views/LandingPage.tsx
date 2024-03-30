import { Button, useDisclosure, Box } from "@chakra-ui/react";
import "../App.css";
import CustomModal from "../components/CustomModal";
import { APP_TEXTS } from "../utils/constant";
import { MetaMaskicon, XummIcon } from "../assets";
import { useSDK } from "@metamask/sdk-react";
import WalletBtn from "../components/WalletBtn";
import { useState } from "react";
import { useIsConnected, useMintToken } from "@nice-xrpl/react-xrpl";

import Header from "../components/Header";
import { Xumm } from "xumm";
import { XummAuth } from "../features/auth/auth";

const LandingPage: React.FC = () => {
  const { sdk } = useSDK();
  import.meta.env;
  const onClickHandle = () => {};
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isConnected = useIsConnected;
  const mintToken = useMintToken();
  const connect = async () => {
    try {
      const accounts = await sdk?.connect();
      console.log(accounts[0]);
      console.log(isConnected);
      const result = await mintToken("3", 0);
      console.log(result);

      // setAccount(accounts?.[0]);
    } catch (err) {
      console.warn("failed to connect..", err);
    }
  };
  const xummAuth = new XummAuth();

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        marginRight="30px"
        marginTop="20px"
      >
        <div></div>
        <Box display="flex" alignItems="center" gap="20px">
          <Header />
          <Button
            colorScheme=""
            backgroundColor="#4E5769"
            color="white"
            onClick={onOpen}
          >
            {APP_TEXTS.signIn}
          </Button>
        </Box>
      </Box>

      <CustomModal
        isOpen={isOpen}
        onClose={onClose}
        title={APP_TEXTS.connectWallet}
      >
        <>
          <WalletBtn
            label={APP_TEXTS.connectWithMetaMask}
            icon={MetaMaskicon}
            onClick={() => {
              connect();
            }}
          />
          <WalletBtn
            label={APP_TEXTS.connectWithXumm}
            icon={XummIcon}
            onClick={() => {
              xummAuth.login();
            }}
          />
        </>
      </CustomModal>
    </>
  );
};

export default LandingPage;
