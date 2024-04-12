import React, { useEffect } from "react";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import { Nft } from "../../utils/types";
import useWebSocket from "react-use-websocket";
import NftTokenMintService from "../../services/nftTokenMint";
import MyNfts from "../../components/MyNfts";
import { socketUrl } from "../../utils/constant";

const IndexView: React.FC = ({}) => {
  const account = useSelector((state: RootState) => state.user.me?.account);
  const [nfts, setNfts] = React.useState<Nft[]>([]);

  // const socketUrl = import.meta.env.VITE_WS_TEST_URL;
  const { sendMessage, lastMessage } = useWebSocket(socketUrl);

  useEffect(() => {
    sendMessage(NftTokenMintService.getConnectedUserNft(account));
  }, []);

  useEffect(() => {
    if (lastMessage != null) {
      const resultEvent = JSON.parse(lastMessage.data)["result"];
      if (resultEvent && resultEvent.account_nfts) {
        console.log(resultEvent.account_nfts);
        const nftResult = NftTokenMintService.getNfts(resultEvent);
        if (nftResult) setNfts(() => [...nftResult]);
      }
    }
  }, [lastMessage]);

  return (
    <div style={{ padding: 20 }}>
      <MyNfts nfts={nfts} />
    </div>
  );
};

export default IndexView;