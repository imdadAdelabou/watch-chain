import { Stack, Input, Select } from "@chakra-ui/react";
import React from "react";
import { APP_TEXTS } from "../utils/constant";

const MintPage: React.FC = ({}) => {
  return (
    <div>
      <Stack>
        <Input placeholder={APP_TEXTS.nftName} />
        <Input placeholder={APP_TEXTS.nftBrand} />
        <Select placeholder={APP_TEXTS.watchCase}></Select>
      </Stack>
    </div>
  );
};

export default MintPage;
