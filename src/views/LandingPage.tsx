import { Button, useDisclosure, Box } from "@chakra-ui/react";
import "../App.css";
import CustomModal from "../components/CustomModal";
import { APP_TEXTS } from "../utils/constant";
import { XummIcon } from "../assets";
import WalletBtn from "../components/WalletBtn";
import Header from "../components/Header";
import XummAuth from "../features/auth/auth";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { Outlet } from "react-router-dom";
import BackDrop from "../components/hamburger_bar/Backdrop";
import React from "react";

const LandingPage: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const jwt = useSelector((state: RootState) => state.user.jwt);
  const openClassBackDrop = useSelector(
    (state: RootState) => state.user.openClassBackDrop
  );
  const dispatch: AppDispatch = useDispatch();

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
            display={["none", "block"]}
          >
            {jwt && jwt.length !== 0 ? APP_TEXTS.logOut : APP_TEXTS.signIn}
          </Button>
        </Box>
      </Box>

      <Outlet />

      <CustomModal
        isOpen={isOpen}
        onClose={onClose}
        title={APP_TEXTS.connectWallet}
      >
        <>
          <WalletBtn
            label={APP_TEXTS.connectWithXumm}
            icon={XummIcon}
            onClick={() => {
              XummAuth.login(dispatch);
            }}
          />
        </>
      </CustomModal>

      <BackDrop openClass={openClassBackDrop || ""} />
    </>
  );
};

export default LandingPage;
