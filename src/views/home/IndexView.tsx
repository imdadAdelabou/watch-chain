import React, { useEffect } from "react";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import { Nft } from "../../utils/types";
import useWebSocket from "react-use-websocket";
import NftTokenMintService from "../../services/nftTokenMint";
import MyNfts from "../../components/MyNfts";
import { APP_TEXTS, socketUrl } from "../../utils/constant";
import DiscoverOtherNft from "./DiscoverOtherNft";
import RedisService from "../../services/redisService";
import { Text } from "@chakra-ui/react";
import Hero from "./hero/Hero";

const IndexView: React.FC = ({}) => {
  const account = useSelector((state: RootState) => state.user.me?.account);
  const [nfts, setNfts] = React.useState<Nft[]>([]);
  const [othersNfts, setOthersNfts] = React.useState<Nft[]>([]);

  // const socketUrl = import.meta.env.VITE_WS_TEST_URL;
  const { sendMessage, lastMessage } = useWebSocket(socketUrl);

  useEffect(() => {
    sendMessage(NftTokenMintService.getConnectedUserNft(account));
  }, [account]);

  useEffect(() => {
    if (lastMessage != null) {
      const resultEvent = JSON.parse(lastMessage.data)["result"];
      if (resultEvent && resultEvent.account_nfts) {
        console.log(resultEvent.account_nfts);
        const nftResult = NftTokenMintService.getNfts(resultEvent);
        if (nftResult) setNfts(() => [...nftResult]);
      }
    }
  }, [lastMessage]);

  useEffect(() => {
    const nfts: Nft[] = [];

    RedisService.getAllUserWithNftIds().then(async (res) => {
      delete res[account];
      console.log(res);
      for (const key in res) {
        console.log(key, "KEY");
        for (const nftId of res[key]) {
          console.log(nftId, "NFT ID IN KEY KEY");

          const nft = await NftTokenMintService.getNftById(nftId);
          if (nft) {
            const nftToAdd: Nft = {
              Flags: nft.flags,
              Issuer: nft.issuer,
              NFTokenID: nft.nft_id,
              URI:
                nft.uri && nft.uri.length > 0
                  ? NftTokenMintService.convertURIToPinataURL(nft.uri)
                  : "",
              nft_serial: nft.nft_serial,
              TransferFee: nft.transfer_fee,
            };

            nfts.push(nftToAdd);
          }
        }
      }

      setOthersNfts(() => [...nfts]);
    });
  }, [account]);

  return (
    <div style={{ padding: 20 }}>
      <Hero />
      <Text fontSize="3xl" as="b">
        {APP_TEXTS.myNft} ({nfts.length})
      </Text>
      <MyNfts nfts={nfts} />
      <DiscoverOtherNft />
      <MyNfts nfts={othersNfts} />
    </div>
  );
};

export default IndexView;
