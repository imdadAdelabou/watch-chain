import axios from "axios";

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
}

export default RedisService;
