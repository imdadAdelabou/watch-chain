import { Xumm } from "xumm";
import {
  AccountInfo,
  CreatorCardProps,
  MemoType,
  NFTokenAcceptOfferType,
  NFTokenCreateSellOfferType,
  ResolvedType,
  User,
} from "../../utils/types";
import { AppDispatch } from "../../store";
import { setJwt, setMe } from "../User/user.slice";
import NftTokenMintService from "../../services/nftTokenMint";
import { XummJsonTransaction } from "xumm-sdk/dist/src/types";
import NFTCreateOffer from "../../services/nftCreateOffer";
import { UserAccount } from "../../services/redisService";
import axios from "axios";

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
    try {
      let result = (await this._xumm!.authorize()) as User;
      console.log(result);
      console.log(result.jwt);
      dispatch(setJwt(result.jwt));
      dispatch(setMe(result.me));

      // After a successful login, we can store the user wallet address in Redis
      UserAccount.addNewUserAccountAddress(result.me.account);
    } catch (error) {
      //TODO: Handle error
      console.error(error);
    }
  }

  async createAndSubscribeToNftMint(
    account: string,
    transferFee: number,
    uri: string,
    memos: MemoType[],
    setUrl: (url: string | undefined) => void,
    setPayloadQr: (url: string | undefined) => void,
    setModalIsOpen: (value: boolean) => void,
    getResolvedValue: (value: ResolvedType | undefined) => void
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

    const payload = (await result?.resolved) as ResolvedType;

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
    getResolvedValue: (value: ResolvedType | undefined) => void
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

    //Typed the resolved value
    const payload = (await result?.resolved) as ResolvedType;
    setUrl(undefined);
    setPayloadQr(undefined);
    setModalIsOpen(false);
    getResolvedValue(payload);

    console.log("Resolved", payload);
  }

  async createAndSubscribeToNftAcceptSellOffer(
    data: NFTokenAcceptOfferType,
    setUrl: (url: string | undefined) => void,
    setPayloadQr: (url: string | undefined) => void,
    setModalIsOpen: (value: boolean) => void,
    getResolvedValue: (value: ResolvedType | undefined) => void
  ) {
    const result = await this._xumm?.payload?.createAndSubscribe(
      NFTCreateOffer.createAcceptSellOffer(data.Account, data.NFTokenSellOffer),
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

    const resolved = (await result?.resolved) as ResolvedType;
    setUrl(undefined);
    setPayloadQr(undefined);
    setModalIsOpen(false);
    getResolvedValue(resolved);

    console.log("Resolved", resolved);
  }

  static async getTopCreatorsProfile(): Promise<CreatorCardProps[]> {
    try {
      const allCreatoresAddresses =
        await UserAccount.getAllUserAccountAddresses();
      const accountCreatorsInfos = allCreatoresAddresses.map(
        async (account) => {
          const response = (
            await axios.get(
              `https://xumm.app/api/v1/platform/account-meta/${account}`
            )
          ).data as AccountInfo;

          return response;
        }
      );

      console.log(allCreatoresAddresses);
      console.log(accountCreatorsInfos);
      const creatorsInfos = await Promise.all(accountCreatorsInfos);

      return creatorsInfos.map((creator, index) => ({
        avatar: creator.avatar,
        name: creator.account,
        account: creator.account,
        totalSales: 0,
        rank: index,
      }));
    } catch (e) {
      console.log(e);
      return [];
    }
  }
}

export const XummAuthStatic = XummAuth;
export default new XummAuth();
