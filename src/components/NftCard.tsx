import React from "react";
import { HStack, Text } from "@chakra-ui/react";

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

const NftCard: React.FC<NftCardProps> = ({
  url,
  title,
  price,
  highestBid,
  author,
}) => {
  return (
    <div className="bg-[#3B3B3B] rounded-[20px]">
      <div className="details px-[30px] pt-[20px] pb-[25px]">
        <Text
          className="font-[600] text-[22px] leading-[140%]"
          fontFamily="Work Sans"
        >
          {title}
        </Text>
        <HStack className="mt-[5px]">
          <img
            src="https://www.japanfm.fr/wp-content/uploads/2024/01/boruto-nouveau-rival-scaled.jpg"
            className="block w-[24px] h-[24px] bg-white mr-[12px] rounded-full"
          />
          <Text className="text-lg leading-[38px]">{author.name}</Text>
        </HStack>
      </div>
    </div>
  );
};

export default NftCard;
