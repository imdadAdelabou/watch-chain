import { Button, useDisclosure, Box } from "@chakra-ui/react";
import "../App.css";
import CustomModal from "../components/CustomModal";
import { APP_TEXTS } from "../utils/constant";
import { MetaMaskicon, XummIcon } from "../assets";
import { useSDK } from "@metamask/sdk-react";
import WalletBtn from "../components/WalletBtn";
import { useEffect, useState } from "react";
import { useIsConnected, useMintToken } from "@nice-xrpl/react-xrpl";

import Header from "../components/Header";
import XummAuth from "../features/auth/auth";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import useWebSocket from "react-use-websocket";
import NftTokenMintService from "../services/nftTokenMint";

const LandingPage: React.FC = () => {
  const { sdk } = useSDK();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isConnected = useIsConnected;
  const connect = async () => {
    try {
      const accounts = await sdk?.connect();
      console.log(accounts[0]);
      console.log(isConnected);
    } catch (err) {
      console.warn("failed to connect..", err);
    }
  };

  const dispatch: AppDispatch = useDispatch();
  const jwt = useSelector((state: RootState) => state.user.jwt);
  const account = useSelector((state: RootState) => state.user.me?.account);
  const socketUrl = "wss://s.devnet.rippletest.net:51233";
  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);

  useEffect(() => {
    if (lastMessage != null) {
      console.log(lastMessage);
    }
  }, [lastMessage]);

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
            backgroundColor={jwt && jwt.length !== 0 ? "red" : "#4E5769"}
            color="white"
            onClick={onOpen}
          >
            {jwt && jwt.length !== 0 ? APP_TEXTS.logOut : APP_TEXTS.signIn}
          </Button>
        </Box>
      </Box>

      <Button
        onClick={() =>
          XummAuth.createAndSubscribeToNftMint(
            account,
            10,
            "QmdCovBTScVR3i3i6Qrji6yKdb1q3eUnPdgzmYW6HdRsn2"
          )
        }
      >
        Mint nft
      </Button>

      <Button
        onClick={() =>
          sendMessage(NftTokenMintService.getConnectedUserNft(account))
        }
      >
        Get nft
      </Button>

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
              XummAuth.login(dispatch);
            }}
          />
        </>
      </CustomModal>
    </>
  );
};

export default LandingPage;