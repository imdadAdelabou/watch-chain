export interface MeType {
  account: string;
  picture: string;
}

export interface User {
  jwt: string;
  me: MeType;
}

export interface Nft {
  Flags: number;
  Issuer: string;
  NFTokenID: string;
  URI: string;
  nft_serial: number;
  TransferFee: number;
}

export interface NftCreatedType {
  account_nfts: Nft[];
}

export interface MyNftsProps {
  nfts: Nft[];
}

export interface LocalStorageServiceType {
  _setItem(key: string, value: string): void;
  setJwtToken(token: string): void;
  setWalletAddress(address: string): void;
}

export interface OptionWatchType {
  value: string;
  name: string;
}

export interface MemoType {
  Memo: {
    MemoType: string;
    MemoData: string;
  };
}
