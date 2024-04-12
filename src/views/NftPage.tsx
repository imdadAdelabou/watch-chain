import { Img } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Ipfs from "../services/ipfs";
import {
  MetaDataEntryType,
  OptionWatchType,
  PinataPinnedFileType,
} from "../utils/types";
import { APP_TEXTS } from "../utils/constant";

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const OptionView: React.FC<OptionWatchType> = ({ name, value }) => {
  return (
    <>
      <h1 className="font-spaceMono text-[22px] leading-[35.2px] font-bold text-[#858584] mb-2">
        {name}
      </h1>
      <p className="font-workSans text-[16px] leading-[35px] mb-[30px]">
        {value}
      </p>
    </>
  );
};

const NftPage: React.FC = () => {
  const query = useQuery();
  const uri = query.get("uri")!;
  const issuer = query.get("issuer")!;
  const [nftDetails, setNftDetails] = React.useState<
    PinataPinnedFileType | undefined
  >();

  useEffect(() => {
    if (uri) {
      const split = uri.split("/");
      Ipfs.getPinnedFileFromIPFS(split.at(split.length - 1) as string).then(
        (res) => {
          console.log(res);
          setNftDetails(res);
        }
      );
    }
  }, []);

  const genDetails = (details: MetaDataEntryType) => {
    return Object.keys(details.keyvalues).map((key, index) => (
      <OptionView name={key} value={details.keyvalues[key]} key={index} />
    ));
  };

  return (
    <div style={{ marginTop: 70 }}>
      <div>
        <Img
          src={query.get("uri")!}
          loading="lazy"
          boxSize={[150, 250]}
          objectFit="cover"
          display="block"
          marginX="auto"
          marginTop="20px"
        />

        <div id="content" className=" px-10 py-7">
          <div id="description-detail" className="flex flex-row justify-around">
            <div
              id="column1"
              className="flex flex-col max-w-[605px] justify-self-center"
            >
              <div id="title" className="mb-[30px]">
                <h2 className="font-workSans text-[51px] leading-[56px] font-semibold mb-2">
                  {nftDetails?.rows.at(0)?.metadata.name}
                </h2>
              </div>
              <div id="author">
                <OptionView name="Created by" value={issuer} />
              </div>
              <div id="description">
                <OptionView
                  name="Description"
                  value={
                    nftDetails?.rows.at(0)?.metadata.keyvalues != null
                      ? nftDetails.rows.at(0)?.metadata.keyvalues.description!
                      : APP_TEXTS.noDescription
                  }
                />
              </div>
              <div id="details" className="mb-[30px]">
                {nftDetails?.rows.at(0)?.metadata.keyvalues != null
                  ? genDetails(nftDetails.rows.at(0)?.metadata!)
                  : APP_TEXTS.noDetails}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftPage;
