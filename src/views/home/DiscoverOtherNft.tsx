import NftCard from "../../components/NftCard";
import SubDescriptionSection from "../../components/landingPage/SubDescriptionSection";
import TitleSection from "../../components/landingPage/TitleSection";
import { APP_TEXTS } from "../../utils/constant";

// Discover Other NFTs
const DiscoverOtherNft = () => {
  return (
    <div style={{ marginTop: 30 }}>
      <TitleSection title={APP_TEXTS.discoverOtherNft} />
      <SubDescriptionSection title={APP_TEXTS.discoverOtherNftDescription} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mt-[20px]">
        {Array.from({ length: 6 }).map((_, index) => (
          <NftCard
            url={
              "https://www.connaissancedesarts.com/wp-content/thumbnails/uploads/2022/02/cda22_actu_nft_faux_apes_main-tt-width-1200-height-675-fill-0-crop-1-bgcolor-ffffff.jpg"
            }
            key={index}
            title="Distant Galaxy"
            author={{ name: "MoonDancer", profileUrl: "" }}
            price={1.63}
            highestBid={0.33}
          />
        ))}
      </div>
    </div>
  );
};

export default DiscoverOtherNft;
