export interface MeType {
  account: string;
  picture: string;
}

export interface User {
  jwt: string;
  me: MeType;
  openClassBackDrop?: string;
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
export interface HeaderType {
  getOpenClassFun: (value: string) => void;
}

export interface MetaDataEntryType {
  name: string;
  keyvalues: {
    [key: string]: string;
  };
}

export interface PinataPinnedFileType {
  count: number;
  rows: {
    date_pinned: string;
    ipfs_pin_hash: string;
    id: string;
    size: number;
    metadata: MetaDataEntryType;
    mime_type: string;
  }[];
}

export interface NFTokenCreateSellOfferType {
  Account: string;
  NFTokenID: string;
  Amount: string;
  Flags: number;
}

export interface QrXummModalType {
  url: string;
  qr: string;
}

export interface NftOfferType {
  amount: string;
  flags: number;
  nft_offer_index: string;
  owner: string;
}
