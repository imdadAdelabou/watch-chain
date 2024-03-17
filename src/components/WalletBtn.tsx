import { Button } from "@chakra-ui/react";
import React from "react";

interface WalletBtnType {
  label: string;
  icon: string;
  onClick: () => void;
}

const WalletBtn: React.FC<WalletBtnType> = ({ label, icon, onClick }) => {
  return (
    <Button
      width="100%"
      rightIcon={<img src={icon} />}
      textAlign="start"
      placeContent="space-between"
      marginBottom="20px"
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default WalletBtn;
