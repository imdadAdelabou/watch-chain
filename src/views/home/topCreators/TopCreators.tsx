import React, { useEffect } from "react";
import TitleSection from "../../../components/landingPage/TitleSection";
import { APP_TEXTS } from "../../../utils/constant";
import SubDescriptionSection from "../../../components/landingPage/SubDescriptionSection";
import { Box, Image, Text } from "@chakra-ui/react";
import { CreatorCardProps } from "../../../utils/types";
import { XummAuthStatic } from "../../../features/auth/auth";

export const CreatorCard: React.FC<CreatorCardProps> = ({
  name,
  totalSales,
  rank,
  avatar,
}) => {
  return (
    <Box className="flex gap-[20px] lg:block  bg-[#3B3B3B] rounded-[20px] pt-[20px] px-[20px] pb-[20px] lg:px-[20px] lg:pt-[18px] lg:pb-[20px]">
      <div className="relative">
        <div className="text-[16px] leading-[140%] w-[30px] h-[30px] bg-[#2B2B2B] text-[#858584] rounded-full flex justify-center items-center absolute top-[-8px] left-[-8px]">
          {rank}
        </div>
        <Image
          src={avatar}
          className="rounded-full w-[60px] h-[60px] lg:w-[110px] lg:h-[120px] lg:m-auto"
        />
      </div>
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
  const [creators, setCreators] = React.useState<CreatorCardProps[]>([]);

  useEffect(() => {
    const getTopCreatorsProfile = async () => {
      const result = await XummAuthStatic.getTopCreatorsProfile();
      setCreators(result);
    };
    getTopCreatorsProfile();
  }, []);

  return (
    <div>
      <TitleSection title={APP_TEXTS.topCreators} />
      <SubDescriptionSection title={APP_TEXTS.topCreatorsDescription} />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 mt-[20px] gap-[20px] md:gap-[30px] lg:gap-[30px]">
        {creators.map((creator, index) => (
          <CreatorCard
            key={index}
            name={creator.name}
            totalSales={creator.totalSales}
            rank={creator.rank}
            avatar={creator.avatar}
          />
        ))}
      </div>
    </div>
  );
};

export default TopCreators;
