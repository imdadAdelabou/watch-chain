import {
  Stack,
  Input,
  Select,
  Textarea,
  NumberInput,
  NumberInputField,
} from "@chakra-ui/react";
import React from "react";
import {
  APP_TEXTS,
  watchCasesTypes,
  wristsBandsTypes,
  watchDialsTypes,
  watchIndexTypes,
  watchMovmentTypes,
  waterProofTypes,
} from "../utils/constant";
import { OptionWatchType } from "../utils/types";

const MintPage: React.FC = ({}) => {
  const [transferFee, setTransferFee] = React.useState<number>(0);

  const genOptions = (options: OptionWatchType[]) => {
    return options.map((elm, index) => (
      <option value={elm.value} key={index}>
        {elm.name}
      </option>
    ));
  };

  return (
    <div>
      <Stack>
        <Input placeholder={APP_TEXTS.nftName} />
        <Input placeholder={APP_TEXTS.nftBrand} />
        <Select placeholder={APP_TEXTS.watchCase}>
          {genOptions(watchCasesTypes)}
        </Select>
        <Select placeholder={APP_TEXTS.wristBrand}>
          {genOptions(wristsBandsTypes)}
        </Select>
        <Select placeholder={APP_TEXTS.watchDials}>
          {genOptions(watchDialsTypes)}
        </Select>
        <Select placeholder={APP_TEXTS.watchIndex}>
          {genOptions(watchIndexTypes)}
        </Select>
        <Select placeholder={APP_TEXTS.movmentType}>
          {genOptions(watchMovmentTypes)}
        </Select>
        <Select placeholder={APP_TEXTS.waterProof}>
          {genOptions(waterProofTypes)}
        </Select>
        <h3>{APP_TEXTS.theTransferFee}</h3>
        <NumberInput
          onChange={(fee) => setTransferFee(Number(fee))}
          value={transferFee.toString()}
          min={0}
          max={50000}
        >
          <NumberInputField placeholder={APP_TEXTS.theTransferFee} />
        </NumberInput>
        <Textarea placeholder={APP_TEXTS.description} />
      </Stack>
    </div>
  );
};

export default MintPage;
