import { Xumm } from "xumm";
import { User } from "../../utils/types";
import LocalStorage from "../../services/localStorage";
import { AppDispatch } from "../../store";
import { setJwt, setMe } from "../User/user.slice";

abstract class Auth {
  abstract login(dispatch: AppDispatch): void;
  abstract logout(): void;
}

class XummAuth extends Auth {
  private _xumm?: Xumm;

  constructor() {
    super();
    this._xumm = this._xumm || new Xumm(import.meta.env.VITE_XAMAN_API_KEY);
  } // This is required to call the parent constructor

  async login(dispatch: AppDispatch) {
    console.log("Xumm login");
    let result = (await this._xumm!.authorize()) as User;
    console.log(result);
    console.log(result.jwt);
    dispatch(setJwt(result.jwt));
    dispatch(setMe(result.me));
  }

  logout() {
    console.log("Xumm logout");
  }
}

export { XummAuth };
