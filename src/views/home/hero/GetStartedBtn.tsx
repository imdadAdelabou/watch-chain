import React from "react";
import { Button } from "@chakra-ui/react";
import { APP_TEXTS } from "../../../utils/constant";
import { GetStartedBtnProps } from "../../../utils/types";
import { RocketLaunchIcon } from "../../../assets";

const GetStartedBtn: React.FC<GetStartedBtnProps> = ({ width, height }) => {
  return (
    <Button
      colorScheme="#A259FF"
      backgroundColor="#A259FF"
      borderRadius="20px"
      color="white"
      fontWeight="semibold"
      fontSize="16px"
      lineHeight="140%"
      width={width}
      height={height}
    >
      <img src={RocketLaunchIcon} alt="Rocket Icon" className="mr-[12px]" />
      {APP_TEXTS.getStartedBtnText}
    </Button>
  );
};

export default GetStartedBtn;
