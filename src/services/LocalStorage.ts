import { MeType, User } from "../utils/types";

class LocalStorageService {
  _setItem(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  setJwtToken(token: string): void {
    this._setItem("jwt", token);
  }

  setWalletAddress(address: string): void {
    this._setItem("walletAddress", address);
  }

  setPicture(picture: string): void {
    this._setItem("picture", picture);
  }

  getJwt(): string | null {
    return localStorage.getItem("jwt");
  }

  getUser(): MeType | null {
    const json = localStorage.getItem("XummPkceJwt");
    if (!json) return null;
    const user = JSON.parse(json) as User;

    return { ...user.me };
  }
}

const LocalStorage = new LocalStorageService();

export default LocalStorage;
