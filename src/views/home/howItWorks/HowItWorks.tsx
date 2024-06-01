import React from "react";
import TitleSection from "../../../components/landingPage/TitleSection";
import { APP_TEXTS } from "../../../utils/constant";
import SubDescriptionSection from "../../../components/landingPage/SubDescriptionSection";
import { Box, Image, Text } from "@chakra-ui/react";
import { WallectIcon, StartEarning, CollectionIcon } from "../../../assets";

interface InfoCardProps {
  icon: string;
  title: string;
  description: string;
}

const infos: InfoCardProps[] = [
  {
    icon: WallectIcon,
    title: APP_TEXTS.setupWallet,
    description: APP_TEXTS.setupWalletDescription,
  },
  {
    icon: CollectionIcon,
    title: APP_TEXTS.createYourNFT,
    description: APP_TEXTS.createYourNFTDescription,
  },
  {
    icon: StartEarning,
    title: APP_TEXTS.startEarning,
    description: APP_TEXTS.startEarningDescription,
  },
];

const InfoCard: React.FC<InfoCardProps> = ({ icon, title, description }) => {
  return (
    <Box
      className="bg-[#3B3B3B] px-[30px] md:pt-[10px] mb-[20px] md:mb-0 md:pb-[30px] py-[20px] rounded-[20px] justify-center items-center"
      display={["flex", "block", "block"]}
      gap="20px"
      width={["100%", "210px", "320px"]}
    >
      <Image
        src={icon}
        width={["100px", "160px", "250px"]}
        height={["100px", "160px", "250px"]}
      />
      <div>
        <Text
          fontSize={["16px", "16px", "22px"]}
          lineHeight={["140%", "140%", "160%"]}
          fontWeight="600"
          marginBottom="10px"
          textAlign={["left", "center", "center"]}
        >
          {title}
        </Text>
        <Text
          as="p"
          fontSize={["12px", "12px", "16px"]}
          lineHeight="140%"
          textAlign={["left", "center", "center"]}
          fontWeight="Work sans"
        >
          {description}
        </Text>
      </div>
    </Box>
  );
};

const HowItWorks: React.FC = ({}) => {
  return (
    <div>
      <TitleSection title={APP_TEXTS.howItWorks} />
      <SubDescriptionSection title={APP_TEXTS.howItWorksSubDescription} />

      <Box
        display={["block", "flex", "flex"]}
        gap={["20px", "30px"]}
        marginTop="20px"
      >
        {infos.map((info, index) => (
          <InfoCard
            icon={info.icon}
            title={info.title}
            description={info.description}
            key={index}
          />
        ))}
      </Box>
    </div>
  );
};

export default HowItWorks;
