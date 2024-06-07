import React from "react";
import { HStack, Text } from "@chakra-ui/react";
import { APP_TEXTS } from "../utils/constant";

interface NftCardProps {
  url: string;
  title: string;
  price: number;
  highestBid: number;
  author: {
    name: string;
    profileUrl: string;
  };
}

interface DetailNftProps {
  label: string;
  value: string;
}

const _DetailNft: React.FC<DetailNftProps> = ({ label, value }) => {
  return (
    <div>
      <Text className="text-[12px] leading-[110%] text-[#858584] mb-[8px]">
        {label}
      </Text>
      <Text className="text-[18px] leading-[140%] text-white">{value}</Text>
    </div>
  );
};

const NftCard: React.FC<NftCardProps> = ({
  url,
  title,
  price,
  highestBid,
  author,
}) => {
  return (
    <div className="bg-[#3B3B3B] rounded-[20px]">
      <img
        src={url}
        className="w-[100%] h-[238px] lg:h-[296px] rounded-t-[20px] fit-cover"
      />
      <div className="details px-[30px] pt-[20px] pb-[25px]">
        <Text
          className="font-[600] text-[22px] leading-[140%]"
          fontFamily="Work Sans"
        >
          {title}
        </Text>
        <HStack className="mt-[5px] mb-[25px]">
          <img
            src="https://www.japanfm.fr/wp-content/uploads/2024/01/boruto-nouveau-rival-scaled.jpg"
            className="block w-[24px] h-[24px] bg-white mr-[12px] rounded-full"
          />
          <Text className="text-lg leading-[38px]">{author.name}</Text>
        </HStack>
        <HStack justifyContent="space-between">
          <_DetailNft
            label={APP_TEXTS.priceLabel}
            value={`${price} XRP`}
          ></_DetailNft>
          <_DetailNft
            label={APP_TEXTS.highestBid}
            value={`${highestBid} XRP`}
          ></_DetailNft>
        </HStack>
      </div>
    </div>
  );
};

export default NftCard;
