import { Xumm } from "xumm";
import { MemoType, NFTokenCreateSellOfferType, User } from "../../utils/types";
import { AppDispatch } from "../../store";
import { setJwt, setMe } from "../User/user.slice";
import NftTokenMintService from "../../services/nftTokenMint";
import { XummJsonTransaction } from "xumm-sdk/dist/src/types";
import NFTCreateOffer from "../../services/nftCreateOffer";

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
    memos: MemoType[],
    setUrl: (url: string | undefined) => void,
    setPayloadQr: (url: string | undefined) => void,
    setModalIsOpen: (value: boolean) => void,
    getResolvedValue: (value: unknown | undefined) => void
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
    setUrl(result?.created.next.always);
    setPayloadQr(result?.created.refs.qr_png);
    setModalIsOpen(
      result?.created.next.always != undefined &&
        result?.created.refs.qr_png != undefined
    );
    console.log("Payload QR:", result?.created.refs.qr_png);

    const payload = await result?.resolved;

    setUrl(undefined);
    setPayloadQr(undefined);
    setModalIsOpen(false);
    getResolvedValue(payload);

    console.log("Resolved", payload);
  }

  logout() {
    console.log("Xumm logout");
  }

  async createAndSubscribeToNftSellOffer(
    data: NFTokenCreateSellOfferType,
    setUrl: (url: string | undefined) => void,
    setPayloadQr: (url: string | undefined) => void,
    setModalIsOpen: (value: boolean) => void,
    getResolvedValue: (value: unknown | undefined) => void
  ) {
    const result = await this._xumm?.payload?.createAndSubscribe(
      NFTCreateOffer.createNFTokenSellOfferPayload(data),
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
    setUrl(result?.created.next.always);
    setPayloadQr(result?.created.refs.qr_png);
    setModalIsOpen(
      result?.created.next.always != undefined &&
        result?.created.refs.qr_png != undefined
    );
    console.log("Payload QR:", result?.created.refs.qr_png);

    const payload = await result?.resolved;
    setUrl(undefined);
    setPayloadQr(undefined);
    setModalIsOpen(false);
    getResolvedValue(payload);

    console.log("Resolved", payload);
  }
}

export default new XummAuth();
