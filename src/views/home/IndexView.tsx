import React, { Suspense } from "react";
// import { RootState } from "../../store";
// import { useSelector } from "react-redux";
// import { Nft } from "../../utils/types";
// import useWebSocket from "react-use-websocket";
// import NftTokenMintService from "../../services/nftTokenMint";
// import MyNfts from "../../components/MyNfts";
// import { socketUrl } from "../../utils/constant";

/// Todo: fill the component with a Suspense component
const DiscoverOtherNft = React.lazy(() => import("./DiscoverOtherNft"));
// import RedisService from "../../services/redisService";
import { Box } from "@chakra-ui/react";
import Hero from "./hero/Hero";
import HowItWorks from "./howItWorks/HowItWorks";
import Footer from "../../components/layout/Footer";

const TopCreators = React.lazy(() => import("./topCreators/TopCreators"));

const IndexView: React.FC = ({}) => {
  // const account = useSelector((state: RootState) => state.user.me?.account);
  // const [nfts, setNfts] = React.useState<Nft[]>([]);
  // const [othersNfts, setOthersNfts] = React.useState<Nft[]>([]);

  // const socketUrl = import.meta.env.VITE_WS_TEST_URL;
  // const { sendMessage, lastMessage } = useWebSocket(socketUrl);

  // useEffect(() => {
  //   sendMessage(NftTokenMintService.getConnectedUserNft(account));
  // }, [account]);

  // useEffect(() => {
  //   if (lastMessage != null) {
  //     const resultEvent = JSON.parse(lastMessage.data)["result"];
  //     if (resultEvent && resultEvent.account_nfts) {
  //       console.log(resultEvent.account_nfts);
  //       const nftResult = NftTokenMintService.getNfts(resultEvent);
  //       if (nftResult) setNfts(() => [...nftResult]);
  //     }
  //   }
  // }, [lastMessage]);

  // useEffect(() => {
  //   const nfts: Nft[] = [];

  //   RedisService.getAllUserWithNftIds().then(async (res) => {
  //     delete res[account];
  //     console.log(res);
  //     for (const key in res) {
  //       console.log(key, "KEY");
  //       for (const nftId of res[key]) {
  //         console.log(nftId, "NFT ID IN KEY KEY");

  //         const nft = await NftTokenMintService.getNftById(nftId);
  //         if (nft) {
  //           const nftToAdd: Nft = {
  //             Flags: nft.flags,
  //             Issuer: nft.issuer,
  //             NFTokenID: nft.nft_id,
  //             URI:
  //               nft.uri && nft.uri.length > 0
  //                 ? NftTokenMintService.convertURIToPinataURL(nft.uri)
  //                 : "",
  //             nft_serial: nft.nft_serial,
  //             TransferFee: nft.transfer_fee,
  //           };

  //           nfts.push(nftToAdd);
  //         }
  //       }
  //     }

  //     setOthersNfts(() => [...nfts]);
  //   });
  // }, [account]);

  return (
    <div>
      <Hero />
      <Box paddingX={["20px", "150px"]}>
        <Suspense fallback={<h1>Loading</h1>}>
          <TopCreators />
        </Suspense>
        {/* <MyNfts nfts={nfts} /> */}
        <div className="spacer mt-[80px]"></div>
        <Suspense fallback={<h1>Loading</h1>}>
          <DiscoverOtherNft />
        </Suspense>
        {/* <MyNfts nfts={othersNfts} /> */}
        <div className="spacer mt-[80px]"></div>
        <HowItWorks />
      </Box>
      <div className="spacer mt-[80px]"></div>
      <Footer />
    </div>
  );
};

export default IndexView;
