import { NFTokenCreateSellOfferType } from "../utils/types";
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
}

export default NFTCreateOffer;
