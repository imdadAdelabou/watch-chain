import { Button, useDisclosure } from "@chakra-ui/react";
import "./App.css";
import CustomModal from "./components/CustomModal";
import { APP_TEXTS } from "./utils/constant";
import { MetaMaskicon, XummIcon } from "./assets";
import { useSDK } from "@metamask/sdk-react";
import WalletBtn from "./components/WalletBtn";
import { useState } from "react";

function App() {
  // const [account, setAccount] = useState<string>();
  const { sdk } = useSDK();
  const onClickHandle = () => {};
  const { isOpen, onOpen, onClose } = useDisclosure();
  const connect = async () => {
    try {
      const accounts = await sdk?.connect();
      console.log(accounts[0]);
      // setAccount(accounts?.[0]);
    } catch (err) {
      console.warn("failed to connect..", err);
    }
  };

  return (
    <>
      <Button
        colorScheme=""
        backgroundColor="#4E5769"
        color="white"
        onClick={onOpen}
      >
        {APP_TEXTS.signIn}
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
            onClick={() => {}}
          />
        </>
      </CustomModal>
    </>
  );
}

export default App;
