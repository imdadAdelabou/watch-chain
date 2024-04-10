import React, { useEffect } from "react";
import { Button } from "@chakra-ui/react";
import { AppDispatch, RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { Nft } from "../../utils/types";
import useWebSocket from "react-use-websocket";
import NftTokenMintService from "../../services/nftTokenMint";
import MyNfts from "../../components/MyNfts";

const IndexView: React.FC = ({}) => {
  const account = useSelector((state: RootState) => state.user.me?.account);
  const [nfts, setNfts] = React.useState<Nft[]>([]);

  const dispatch: AppDispatch = useDispatch();
  const jwt = useSelector((state: RootState) => state.user.jwt);
  const socketUrl = "wss://s.devnet.rippletest.net:51233";
  const { sendMessage, lastMessage } = useWebSocket(socketUrl);

  useEffect(() => {
    sendMessage(NftTokenMintService.getConnectedUserNft(account));
  }, []);

  useEffect(() => {
    if (lastMessage != null) {
      // console.log(JSON.parse(lastMessage.data));
      const resultEvent = JSON.parse(lastMessage.data)["result"];
      if (resultEvent.account_nfts) {
        const nftResult = NftTokenMintService.getNfts(resultEvent);
        if (nftResult) setNfts(() => [...nftResult]);
      }
    }
  }, [lastMessage]);

  return (
    <div>
      <MyNfts nfts={nfts} />
    </div>
  );
};

export default IndexView;
