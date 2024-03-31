import { convertStringToHex } from "xrpl";

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
}

export default NftTokenMintService;
