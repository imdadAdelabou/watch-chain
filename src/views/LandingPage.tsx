import { Button, useDisclosure, Box } from "@chakra-ui/react";
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
import authUserService from "../services/authUserService";
import LogoutModalContent from "../components/auth/LogoutModalContent";
import LocalStorage from "../services/LocalStorage";

const LandingPage: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const openClassBackDrop = useSelector(
    (state: RootState) => state.user.openClassBackDrop
  );
  const dispatch: AppDispatch = useDispatch();
  const isLoggedIn = authUserService.isLogedIn;

  const login = () => {
    XummAuth.login(dispatch).then(() => {
      onClose();
    });
  };

  const cancelLogout = () => onClose();
  const logout = () => {
    LocalStorage.clear();
    onClose();
  };

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
            backgroundColor={isLoggedIn ? "red" : "#4E5769"}
            color="white"
            onClick={onOpen}
            display={["none", "block"]}
          >
            {isLoggedIn ? APP_TEXTS.logOut : APP_TEXTS.signIn}
          </Button>
        </Box>
      </Box>

      <Outlet />

      <CustomModal
        isOpen={isOpen}
        onClose={onClose}
        title={isLoggedIn ? APP_TEXTS.logOut : APP_TEXTS.connectWallet}
      >
        {isLoggedIn ? (
          <LogoutModalContent
            cancelCallBack={cancelLogout}
            logoutCallBack={logout}
          />
        ) : (
          <WalletBtn
            label={APP_TEXTS.connectWithXumm}
            icon={XummIcon}
            onClick={login}
          />
        )}
      </CustomModal>

      <BackDrop openClass={openClassBackDrop || ""} />
    </>
  );
};

export default LandingPage;
