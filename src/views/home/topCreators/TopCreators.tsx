import React from "react";
import TitleSection from "../../../components/landingPage/TitleSection";
import { APP_TEXTS } from "../../../utils/constant";
import SubDescriptionSection from "../../../components/landingPage/SubDescriptionSection";
import { Box, HStack, Image, Text } from "@chakra-ui/react";
import { CreatorPlaceHolder } from "../../../assets";

interface CreatorCardProps {
  name: string;
  totalSales: number;
}

export const CreatorCard: React.FC<CreatorCardProps> = ({
  name,
  totalSales,
}) => {
  return (
    <Box className="flex gap-[20px] lg:block  bg-[#3B3B3B] rounded-[20px] pt-[20px] px-[20px] pb-[20px] lg:px-[20px] lg:pt-[18px] lg:pb-[20px]">
      <Image
        src={CreatorPlaceHolder}
        className="rounded-full w-[60px] h-[60px] lg:w-[110px] lg:h-[120px] lg:m-auto"
      />
      <div>
        <Text
          as="h3"
          className="font-[600] text-[22px] leading-[140%] lg:text-center lg:mt-[20px]"
          fontFamily="Work Sans"
          marginBottom="5px"
        >
          {name}
        </Text>
        <div>
          <span
            className="font-[16px] leading-[140%] text-[#858584]"
            style={{ fontFamily: "Work Sans" }}
          >
            {APP_TEXTS.totalSales}
          </span>
          <span
            className="font-[16px] leading-[140%] text-white"
            style={{ fontFamily: "Work Sans" }}
          >
            {" "}
            {totalSales} {APP_TEXTS.currency}
          </span>
        </div>
      </div>
    </Box>
  );
};

const TopCreators: React.FC = () => {
  return (
    <div>
      <TitleSection title={APP_TEXTS.topCreators} />
      <SubDescriptionSection title={APP_TEXTS.topCreatorsDescription} />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 mt-[20px] gap-[20px] md:gap-[30px] lg:gap-[30px]">
        {Array.from({ length: 8 }).map((_, index) => (
          <CreatorCard key={index} name="RustyRobot" totalSales={34.53} />
        ))}
      </div>
    </div>
  );
};

export default TopCreators;
