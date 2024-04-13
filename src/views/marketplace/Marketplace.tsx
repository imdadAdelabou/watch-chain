import React from "react";
import { Nft } from "../../utils/types";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import RedisService from "../../services/redisService";
import NftTokenMintService from "../../services/nftTokenMint";
import NFTCreateOffer from "../../services/nftCreateOffer";
import { Text } from "@chakra-ui/react";
import MyNfts from "../../components/MyNfts";

const Marketplace: React.FC = () => {
  const account = useSelector((state: RootState) => state.user.me?.account);
  const [nfts, setNfts] = React.useState<Nft[]>([]);

  React.useEffect(() => {
    const nfts: Nft[] = [];

    RedisService.getAllUserWithNftIds().then(async (res) => {
      delete res[account];
      console.log(res);
      for (const key in res) {
        console.log(key, "KEY");
        for (const nftId of res[key]) {
          console.log(nftId, "NFT ID IN KEY KEY");

          const nft = await NftTokenMintService.getNftById(nftId);
          const offer = await NFTCreateOffer.getNFTSellOfferRpc(nftId);
          if (typeof offer != "boolean") {
            console.log(offer.nft_offer_index, "OFFER INDEX");
          }
          if (nft) {
            const nftToAdd: Nft = {
              Flags: nft.flags,
              Issuer: nft.issuer,
              NFTokenID: nft.nft_id,
              URI: NftTokenMintService.convertURIToPinataURL(nft.uri),
              nft_serial: nft.nft_serial,
              TransferFee: nft.transfer_fee,
            };
            if (typeof offer != "boolean") {
              nftToAdd.offer = offer;
              nfts.push(nftToAdd);
            }
          }
        }
      }

      setNfts(() => [...nfts]);
    });
  }, [account]);

  return (
    <div style={{ padding: 20 }}>
      <Text fontSize="3xl" as="b">
        Marketplace
      </Text>
      <MyNfts nfts={nfts} />
    </div>
  );
};

export default Marketplace;
