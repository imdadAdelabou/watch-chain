import React from "react";
import { APP_TEXTS } from "../utils/constant";
import { Text, Container, Avatar, Heading, HStack } from "@chakra-ui/react";
import { MyNftsProps, Nft } from "../utils/types";
import { WatchChainIconWithoutBg } from "../assets";

const NftView: React.FC<Nft> = ({ URI, TransferFee }) => {
  return (
    <Container
      width="240px"
      backgroundColor="#3B3B3B"
      borderRadius="20"
      paddingTop="2"
      paddingBottom="4"
      cursor="poniter"
    >
      <Avatar
        size="xl"
        icon={<img src={WatchChainIconWithoutBg} />}
        src={URI}
        display="block"
        margin="auto"
      />
      <Heading
        fontSize="lg"
        textAlign="start"
        color="white"
        marginTop="2"
        marginBottom="2"
      >
        Title
      </Heading>
      <Text
        fontSize="sm"
        textAlign="start"
        color="gray.400"
        noOfLines={3}
        marginBottom="4"
      >
        {APP_TEXTS.lorenIpsum}
      </Text>
      <HStack>
        <Heading fontSize="lg" textAlign="start" color="white" marginTop="2">
          {TransferFee}
        </Heading>
        <Text fontSize="sm" textAlign="start" color="gray.400" marginTop="2">
          {APP_TEXTS.transferFee}
        </Text>
      </HStack>
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
