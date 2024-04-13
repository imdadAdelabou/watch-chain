import { convertHexToString, convertStringToHex } from "xrpl";
import {
  MemoType,
  Nft,
  NftCreatedType,
  QuickNodeNftResponse,
} from "../utils/types";
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
      Fee: "10",
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

  static async getNftById(
    id: string
  ): Promise<QuickNodeNftResponse | undefined> {
    try {
      const result = await axios.post(
        "https://smart-few-patron.xrp-testnet.quiknode.pro/4c8681a57440231b6ee6bcd14aa6472eb04c7b2f/",
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
      console.log("NFT BY ID", result.data);
      if (result.status !== 200) {
        return undefined;
        // result.json().then((data) => {
        //   console.log(JSON.parse(data));
        // });
      }
      return result.data.result;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }

  static getNfts(json: NftCreatedType): Nft[] | undefined {
    if (json.account_nfts.length === 0) {
      return undefined;
    }
    // NftTokenMintService.getNftById(json.account_nfts[0].NFTokenID);

    return json.account_nfts.map((nft) => {
      return {
        ...nft,
        URI:
          import.meta.env.VITE_GATEWAY_PINATA_URL + convertHexToString(nft.URI),
      };
    });
  }

  static convertURIToPinataURL(uri: string): string {
    return import.meta.env.VITE_GATEWAY_PINATA_URL + convertHexToString(uri);
  }
}

export default NftTokenMintService;
