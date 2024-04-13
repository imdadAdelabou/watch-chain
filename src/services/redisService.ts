import axios from "axios";
import { UserWithftIdsType } from "../utils/types";

class RedisService {
  static async addNftIdToUser(
    account: string,
    nftId: string
  ): Promise<boolean> {
    try {
      const result = await axios.post(
        `${import.meta.env.VITE_SERVER_API_URL}/add-nft-id-to-user`,
        {
          userId: account,
          nftId: nftId,
        }
      );
      if (result.status === 200) return true;

      return false;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  static async getAllUserWithNftIds(): Promise<UserWithftIdsType> {
    try {
      const result = await axios.get(
        `${import.meta.env.VITE_SERVER_API_URL}/get-user-with-nft-ids`
      );
      if (result.status === 200) {
        const dataToReturn: UserWithftIdsType = {};
        const userWithNftIds = result.data["userWithNftIds"];
        if (Object.keys(userWithNftIds).length === 0) {
          return {};
        }

        for (const key in userWithNftIds) {
          dataToReturn[key] = userWithNftIds[key].split(",");
        }
        return dataToReturn;
      }

      return {};
    } catch (error) {
      console.error(error);
      return {};
    }
  }
}

export default RedisService;
