import axios from "axios";
import { NFTokenCreateSellOfferType, NftOfferType } from "../utils/types";
import { XummJsonTransaction } from "xumm-sdk/dist/src/types";

class NFTCreateOffer {
  static createNFTokenSellOfferPayload(
    payload: NFTokenCreateSellOfferType
  ): XummJsonTransaction {
    return {
      TransactionType: "NFTokenCreateOffer",
      Account: payload.Account,
      NFTokenID: payload.NFTokenID,
      Amount: payload.Amount,
      Flags: payload.Flags,
    };
  }

  static getNFTSellOffer(nftTokenId: string): string {
    return JSON.stringify({
      command: "nft_sell_offers",
      nft_id: nftTokenId,
      ledger_index: "validated",
    });
  }

  static async getNFTSellOfferRpc(
    nftTokenId: string
  ): Promise<NftOfferType | false> {
    try {
      const result = await axios.post(import.meta.env.VITE_QUICK_NODE_API_URL, {
        method: "nft_sell_offers",
        params: [
          {
            nft_id: nftTokenId,
          },
        ],
      });

      return result.data.result.offers
        ? (result.data.result.offers[0] as NftOfferType)
        : false;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
}

export default NFTCreateOffer;
