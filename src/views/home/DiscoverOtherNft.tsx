import SubDescriptionSection from "../../components/landingPage/SubDescriptionSection";
import TitleSection from "../../components/landingPage/TitleSection";
import { APP_TEXTS } from "../../utils/constant";

// Discover Other NFTs
const DiscoverOtherNft = () => {
  return (
    <div style={{ marginTop: 30 }}>
      <TitleSection title={APP_TEXTS.discoverOtherNft} />
      <SubDescriptionSection title={APP_TEXTS.discoverOtherNftDescription} />
    </div>
  );
};

export default DiscoverOtherNft;
