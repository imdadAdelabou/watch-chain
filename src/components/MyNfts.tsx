import React from "react";
import { APP_TEXTS } from "../utils/constant";
import { Text, Container, Avatar } from "@chakra-ui/react";
import { MyNftsProps, Nft } from "../utils/types";
import { WatchChainIconWithoutBg } from "../assets";

const NftView: React.FC<Nft> = ({ URI }) => {
  return (
    <Container
      width="240px"
      height="238px"
      backgroundColor="#3B3B3B"
      borderRadius="20"
    >
      <Avatar
        size="xl"
        icon={<img src={WatchChainIconWithoutBg} />}
        src={URI}
      />
    </Container>
  );
};

const MyNfts: React.FC<MyNftsProps> = ({ nfts }) => {
  return (
    <div>
      <Text fontSize="3xl" as="b">
        {APP_TEXTS.myNft} ({nfts.length})
      </Text>
      {nfts.length > 0
        ? nfts.map((nft) => <NftView key={nfts.indexOf(nft)} {...nft} />)
        : null}
    </div>
  );
};

export default MyNfts;
