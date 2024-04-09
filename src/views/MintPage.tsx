import {
  Stack,
  Input,
  Select,
  Textarea,
  NumberInput,
  NumberInputField,
  Button,
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
  const [nftName, setNftName] = React.useState<string>("");
  const [nftBrand, setNftBrand] = React.useState<string>("");
  const [watchCase, setWatchCase] = React.useState<string>("");
  const [wristBand, setWristBand] = React.useState<string>("");
  const [watchDial, setWatchDial] = React.useState<string>("");
  const [watchIndex, setWatchIndex] = React.useState<string>("");
  const [watchMovment, setWatchMovment] = React.useState<string>("");
  const [waterProof, setWaterProof] = React.useState<string>("");
  const [description, setDescription] = React.useState<string>("");

  const genOptions = (options: OptionWatchType[]) => {
    return options.map((elm, index) => (
      <option value={elm.value} key={index}>
        {elm.name}
      </option>
    ));
  };

  const handleMint = () => {
    console.log(nftName);
    console.log(nftBrand);
    console.log(watchCase);
    console.log(wristBand);
    console.log(watchDial);
    console.log(watchIndex);
    console.log(watchMovment);
    console.log(waterProof);
    console.log(transferFee);
  };

  return (
    <div>
      <Stack marginTop="20" width="40vw" marginX="auto">
        <Input
          placeholder={APP_TEXTS.nftName}
          value={nftName}
          onChange={(e) => setNftName(e.target.value)}
        />
        <Input
          placeholder={APP_TEXTS.nftBrand}
          value={nftBrand}
          onChange={(e) => setNftBrand(e.target.value)}
        />
        <Select
          placeholder={APP_TEXTS.watchCase}
          value={watchCase}
          onChange={(e) => setWatchCase(e.target.value)}
        >
          {genOptions(watchCasesTypes)}
        </Select>
        <Select
          placeholder={APP_TEXTS.wristBrand}
          value={wristBand}
          onChange={(e) => setWristBand(e.target.value)}
        >
          {genOptions(wristsBandsTypes)}
        </Select>
        <Select
          placeholder={APP_TEXTS.watchDials}
          value={watchDial}
          onChange={(e) => setWatchDial(e.target.value)}
        >
          {genOptions(watchDialsTypes)}
        </Select>
        <Select
          placeholder={APP_TEXTS.watchIndex}
          value={watchIndex}
          onChange={(e) => setWatchIndex(e.target.value)}
        >
          {genOptions(watchIndexTypes)}
        </Select>
        <Select
          placeholder={APP_TEXTS.movmentType}
          value={watchMovment}
          onChange={(e) => setWatchMovment(e.target.value)}
        >
          {genOptions(watchMovmentTypes)}
        </Select>
        <Select
          placeholder={APP_TEXTS.waterProof}
          value={waterProof}
          onChange={(e) => setWaterProof(e.target.value)}
        >
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
        <Textarea
          placeholder={APP_TEXTS.description}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <Button
          colorScheme="blue"
          color="white"
          marginTop="20px"
          onClick={() => handleMint()}
        >
          {APP_TEXTS.mintLabel}
        </Button>
      </Stack>
    </div>
  );
};

export default MintPage;
