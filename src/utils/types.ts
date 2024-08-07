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
  offer?: NftOfferType;
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

export interface NFTokenAcceptOfferType {
  Account: string;
  NFTokenSellOffer: string;
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

export interface UserWithftIdsType {
  [account: string]: string[];
}

export interface QuickNodeNftResponse {
  issuer: string;
  ledger_index: number;
  nft_id: string;
  nft_serial: number;
  owner: string;
  transfer_fee: number;
  uri: string;

  flags: number;
}

export interface ResolvedType {
  uid: string;
  data: {
    signed: boolean;
    txid: string;
    user_token: boolean;
  };
  payload: {
    response: {
      txid: string;
    };
  };
}
export interface SetNftPriceModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  inputPlaceHolder: string;
  handleOnClickButton: () => void;
  getCurrentValue: (value: string) => void;
}

export interface AccountInfo {
  account: string;
  avatar: string;
  xummProfile: {
    accountAlias: string | null,
    ownerAlias: string | null,
    profileUrl: string | null,
  };
}

// Props

export interface GetStartedBtnProps {
  width: string;
  height: string;
}

export interface StatsProps {
  label: string;
  value: number;
}

export interface TitleSectionProps {
  title: string;
}

export interface SubDescriptionProps extends TitleSectionProps { }

export interface CreatorCardProps {
  avatar: string;
  name: string;
  totalSales: number;
  rank: number;
}

export interface LogoutModalContentProps {
  cancelCallBack: () => void;
  logoutCallBack: () => void;
}

