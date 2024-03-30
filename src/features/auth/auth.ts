import { Xumm } from "xumm";

abstract class Auth {
  abstract login(): void;
  abstract logout(): void;
}

class XummAuth extends Auth {
  private _xumm: Xumm = new Xumm(import.meta.env.VITE_XAMAN_API_KEY);
  constructor() {
    super();
  } // This is required to call the parent constructor

  async login() {
    console.log("Xumm login");
    let result = await this._xumm.authorize();
    console.log(result);
  }

  logout() {
    console.log("Xumm logout");
  }
}

export { XummAuth };
