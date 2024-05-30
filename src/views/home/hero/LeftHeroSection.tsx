import React from "react";
import { Text, Box } from "@chakra-ui/react";
import { APP_TEXTS } from "../../../utils/constant";
import GetStartedBtn from "./GetStartedBtn";
import Stats from "./Stats";

const LeftHeroSection: React.FC = () => {
  return (
    <Box paddingY="80px" paddingX={["20px", "150px"]}>
      <Text
        fontSize="67px"
        fontWeight="bold"
        lineHeight="110%"
        textAlign="start"
        marginBottom="20px"
      >
        {APP_TEXTS.heroTitle}
      </Text>
      <Text fontSize="22px" marginBottom="30px" lineHeight="160%">
        {APP_TEXTS.subHeroDescription}
      </Text>
      <GetStartedBtn width="224px" height="60px" />
      <div className="mt-[30px] flex gap-[30px]">
        <Stats label={APP_TEXTS.totalSales} value={1000} />
        <Stats label={APP_TEXTS.totalNfts} value={30} />
        <Stats label={APP_TEXTS.artistsLabel} value={1000} />
      </div>
    </Box>
  );
};

export default LeftHeroSection;
