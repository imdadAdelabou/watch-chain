import { PinataPinnedFileType } from "../utils/types";

class Ipfs {
  JWT = import.meta.env.VITE_PINATA_JWT;
  _file: File;
  _metadata: string;
  constructor(file: File, metatada: string) {
    this._file = file;
    this._metadata = metatada;
  }

  async pinFileToIPFS() {
    try {
      const formData = new FormData();

      formData.append("file", this._file);

      formData.append("pinataMetadata", this._metadata);

      const pinataOptions = JSON.stringify({
        cidVersion: 0,
      });
      formData.append("pinataOptions", pinataOptions);

      const res = await fetch(import.meta.env.VITE_PINATA_API_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${this.JWT}`,
        },
        body: formData,
      });
      const resData = await res.json();

      return resData.IpfsHash;
    } catch (error) {
      console.log(error);
    }
  }

  static async getPinnedFileFromIPFS(
    ipfsHash: string
  ): Promise<PinataPinnedFileType | undefined> {
    try {
      const res = await fetch(
        `${
          import.meta.env.VITE_PINATA_BASE_URL
        }/data/pinList?hashContains=${ipfsHash}`,
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_PINATA_JWT}`,
          },
        }
      );
      const resData = await res.json();
      return resData;
    } catch (error) {
      console.log(error);
    }
  }
}

export default Ipfs;
