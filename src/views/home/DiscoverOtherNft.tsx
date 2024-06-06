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
            key={index}
            title="Distant Galaxy"
            author={{ name: "MoonDancer", profileUrl: "" }}
          />
        ))}
      </div>
    </div>
  );
};

export default DiscoverOtherNft;
