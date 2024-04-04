import { convertStringToHex } from "xrpl";
import { NftCreatedType } from "../utils/types";
import axios from "axios";

class NftTokenMintService {
  _account: string;
  _transferFee: number;
  _uri: string;

  constructor(account: string, transferFee: number, uri: string) {
    this._account = account;
    this._transferFee = transferFee;
    this._uri = uri;
  }

  createNftTokenMintPayload() {
    return {
      TransactionType: "NFTokenMint",
      Account: this._account,
      TransferFee: this._transferFee,
      NFTokenTaxon: 0,
      Flags: 8,
      Fee: "10",
      URI: convertStringToHex(this._uri),
      Memos: [
        {
          Memo: {
            MemoType: convertStringToHex("platform-creator"),
            MemoData: convertStringToHex("watch-chain"),
          },
        },
      ],
    };
  }

  static getConnectedUserNft(account: string): string {
    return JSON.stringify({
      command: "account_nfts",
      account: account,
      ledger_index: "validated",
    });
  }

  static async getNftById(id: string) {
    console.log(import.meta.env.VITE_JSON_RPC_URL);
    const result = await axios.post(
      import.meta.env.VITE_JSON_RPC_URL,
      {
        method: "nft_info",
        params: [
          {
            nft_id: id,
          },
        ],
      },
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      }
    );
    // const result = await fetch(import.meta.env.VITE_JSON_RPC_URL, {
    //   mode: "no-cors",
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },

    //   body: JSON.stringify({
    //     method: "nft_info",
    //     params: [
    //       {
    //         nft_id: id,
    //       },
    //     ],
    //   }),
    // });
    if (result.status !== 200) {
      console.log(result.data);
      // result.json().then((data) => {
      //   console.log(JSON.parse(data));
      // });
    }
  }

  static getNfts(json: NftCreatedType) {
    if (json.account_nfts.length === 0) {
      return undefined;
    }
    json.account_nfts.forEach((nft) => {
      console.log(nft.NFTokenID);
      this.getNftById(nft.NFTokenID);
    });
  }
}

export default NftTokenMintService;
