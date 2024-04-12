import { APP_TEXTS } from "../../utils/constant";
import { Text } from "@chakra-ui/react";

// Discover Other NFTs
const DiscoverOtherNft = () => {
  return (
    <div style={{ marginTop: 30 }}>
      <Text fontSize="3xl" as="b" marginBottom="4">
        {APP_TEXTS.discoverOtherNft}
      </Text>
    </div>
  );
};

export default DiscoverOtherNft;
