export interface MeType {
  account: string;
  picture: string;
}

export interface User {
  jwt: string;
  me: MeType;
}

export interface LocalStorageServiceType {
  _setItem(key: string, value: string): void;
  setJwtToken(token: string): void;
  setWalletAddress(address: string): void;
}
