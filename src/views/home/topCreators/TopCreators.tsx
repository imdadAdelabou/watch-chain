import React from "react";
import TitleSection from "../../../components/landingPage/TitleSection";
import { APP_TEXTS } from "../../../utils/constant";
import SubDescriptionSection from "../../../components/landingPage/SubDescriptionSection";
import { Box } from "@chakra-ui/react";

export const CreatorCard: React.FC = () => {
  return (
    <Box className="h-[100px] lg:h-[238px] bg-[#3B3B3B] rounded-[20px] pt-[13px] px-[20px] pb-[20px] lg:px-[20px] lg:pt-[18px] lg:pb-[20px]"></Box>
  );
};

const TopCreators: React.FC = () => {
  return (
    <div>
      <TitleSection title={APP_TEXTS.topCreators} />
      <SubDescriptionSection title={APP_TEXTS.topCreatorsDescription} />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 mt-[20px] gap-[20px] md:gap-[30px] lg:gap-[30px]">
        {Array.from({ length: 8 }).map((_, index) => (
          <CreatorCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default TopCreators;
