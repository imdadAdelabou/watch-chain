import { Xumm } from "xumm";
import { MemoType, User } from "../../utils/types";
import { AppDispatch } from "../../store";
import { setJwt, setMe } from "../User/user.slice";
import NftTokenMintService from "../../services/nftTokenMint";
import { XummJsonTransaction } from "xumm-sdk/dist/src/types";

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

  async createAndSubscribeToNftMint(
    account: string,
    transferFee: number,
    uri: string,
    memos: MemoType[]
  ) {
    const nftPayload = new NftTokenMintService(
      account,
      transferFee,
      uri,
      memos
    );
    const result = await this._xumm?.payload?.createAndSubscribe(
      {
        ...(nftPayload.createNftTokenMintPayload() as XummJsonTransaction),
      },
      (eventMessage) => {
        if (Object.keys(eventMessage.data).indexOf("opened") > -1) {
          // Update the UI? The payload was opened.
        }
        if (Object.keys(eventMessage.data).indexOf("signed") > -1) {
          // The `signed` property is present, true (signed) / false (rejected)
          return eventMessage;
        }
      }
    );
    console.log("Payload URL:", result?.created.next.always);
    console.log("Payload QR:", result?.created.refs.qr_png);

    const payload = await result?.resolved;

    console.log("Resolved", payload);
  }

  logout() {
    console.log("Xumm logout");
  }
}

export default new XummAuth();
