class Ipfs {
  JWT = import.meta.env.VITE_PINATA_JWT;
  _file: File;
  constructor(file: File) {
    this._file = file;
  }

  async pinFileToIPFS() {
    try {
      const formData = new FormData();

      formData.append("file", this._file);

      const pinataMetadata = JSON.stringify({
        name: this._file.name,
      });
      formData.append("pinataMetadata", pinataMetadata);

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
}

export default Ipfs;
