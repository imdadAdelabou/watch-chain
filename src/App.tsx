import { Button, useDisclosure } from "@chakra-ui/react";
import "./App.css";
import CustomModal from "./components/CustomModal";
import { APP_TEXTS } from "./utils/constant";
import { MetaMaskicon, XummIcon } from "./assets";
import WalletBtn from "./components/WalletBtn";

function App() {
  const onClickHandle = () => {};
  const { isOpen, onOpen, onClose } = useDisclosure();

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
            onClick={() => {}}
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
