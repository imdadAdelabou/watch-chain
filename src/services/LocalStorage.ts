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
}

export default new LocalStorageService();
