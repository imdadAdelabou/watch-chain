import React from "react";
import { APP_TEXTS } from "../utils/constant";
import { Text, Avatar, Heading, HStack, Stack, Box } from "@chakra-ui/react";
import { MyNftsProps, Nft, PinataPinnedFileType } from "../utils/types";
import { WatchChainIconWithoutBg } from "../assets";
import { useNavigate } from "react-router-dom";
import Ipfs from "../services/ipfs";
import TitleSection from "./landingPage/TitleSection";

const NftView: React.FC<Nft> = ({ URI, TransferFee, Issuer, NFTokenID }) => {
  const naigate = useNavigate();
  const [nftDetails, setNftDetails] = React.useState<
    PinataPinnedFileType | undefined
  >();

  React.useEffect(() => {
    if (URI) {
      const split = URI.split("/");
      Ipfs.getPinnedFileFromIPFS(split.at(split.length - 1) as string).then(
        (res) => {
          console.log(res);
          setNftDetails(res);
        }
      );
    }
  }, []);

  return (
    <Box
      width="240px"
      backgroundColor="#3B3B3B"
      borderRadius="20"
      paddingTop="2"
      paddingBottom="4"
      cursor="pointer"
      paddingX="4"
      onClick={() =>
        naigate(
          `/nft-details?uri=${URI}&transferFee=${TransferFee}&issuer=${Issuer}&nftTokenId=${NFTokenID}`
        )
      }
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
        {nftDetails ? nftDetails.rows[0].metadata.name : ""}
      </Heading>
      <Text
        fontSize="sm"
        textAlign="start"
        color="gray.400"
        noOfLines={3}
        marginBottom="4"
      >
        {nftDetails ? nftDetails.rows[0].metadata.keyvalues.description : ""}
      </Text>
      <HStack>
        <Heading fontSize="lg" textAlign="start" color="white" marginTop="2">
          {TransferFee}
        </Heading>
        <Text fontSize="sm" textAlign="start" color="gray.400" marginTop="2">
          {APP_TEXTS.transferFee}
        </Text>
      </HStack>
    </Box>
  );
};

const MyNfts: React.FC<MyNftsProps> = ({ nfts }) => {
  return (
    <div>
      <TitleSection title={`${APP_TEXTS.myNft} (${nfts.length})`} />
      <Stack
        direction={["column", "row"]}
        spacing="6"
        marginTop="4"
        placeItems="center"
      >
        {nfts.length > 0
          ? nfts.map((nft) => <NftView key={nfts.indexOf(nft)} {...nft} />)
          : null}
      </Stack>
    </div>
  );
};

export { NftView };

export default MyNfts;
