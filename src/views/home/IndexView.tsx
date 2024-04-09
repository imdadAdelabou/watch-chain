import React, { useEffect } from "react";
import { Button } from "@chakra-ui/react";
import XummAuth from "../../features/auth/auth";
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
    if (lastMessage != null) {
      // console.log(JSON.parse(lastMessage.data));
      const nftResult = NftTokenMintService.getNfts(
        JSON.parse(lastMessage.data)["result"]
      );
      if (nftResult) setNfts(() => [...nftResult]);
    }
  }, [lastMessage]);

  return (
    <div>
      <Button
        onClick={() =>
          XummAuth.createAndSubscribeToNftMint(
            account,
            10,
            "QmdCovBTScVR3i3i6Qrji6yKdb1q3eUnPdgzmYW6HdRsn2"
          )
        }
      >
        Mint nft
      </Button>
      <Button
        onClick={() =>
          sendMessage(NftTokenMintService.getConnectedUserNft(account))
        }
      >
        Get nft
      </Button>
      <MyNfts nfts={nfts} />
    </div>
  );
};

export default IndexView;
