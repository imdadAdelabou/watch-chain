import { convertHexToString, convertStringToHex } from "xrpl";
import { MemoType, Nft, NftCreatedType } from "../utils/types";
import axios from "axios";

class NftTokenMintService {
  _account: string;
  _transferFee: number;
  _uri: string;
  _memos: MemoType[] = [];

  constructor(
    account: string,
    transferFee: number,
    uri: string,
    memos: MemoType[]
  ) {
    this._account = account;
    this._transferFee = transferFee;
    this._uri = uri;
    this._memos = memos;
  }

  createMemo(key: string, value: string) {
    return {
      Memo: {
        MemoType: convertStringToHex(key),
        MemoData: convertStringToHex(value),
      },
    };
  }

  createNftTokenMintPayload() {
    const _memos = [
      {
        Memo: {
          MemoType: convertStringToHex("platform-creator"),
          MemoData: convertStringToHex("watch-chain"),
        },
      },
    ];

    if (this._memos.length > 0) {
      this._memos.forEach((memo) => {
        _memos.push(this.createMemo(memo.Memo.MemoType, memo.Memo.MemoData));
      });
    }

    return {
      TransactionType: "NFTokenMint",
      Account: this._account,
      TransferFee: this._transferFee,
      NFTokenTaxon: 0,
      Flags: 8,
      URI: convertStringToHex(this._uri),
      Memos: _memos,
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

  static getNfts(json: NftCreatedType): Nft[] | undefined {
    if (json.account_nfts.length === 0) {
      return undefined;
    }

    return json.account_nfts.map((nft) => {
      return {
        ...nft,
        URI:
          import.meta.env.VITE_GATEWAY_PINATA_URL + convertHexToString(nft.URI),
      };
    });
  }
}

export default NftTokenMintService;
