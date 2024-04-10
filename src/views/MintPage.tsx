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
import XummAuth from "../features/auth/auth";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { FileUpload, FileUploadSelectEvent } from "primereact/fileupload";
import Ipfs from "../services/ipfs";

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
  const [file, setFile] = React.useState<File | null>(null);
  const account = useSelector((state: RootState) => state.user.me?.account);

  const genOptions = (options: OptionWatchType[]) => {
    return options.map((elm, index) => (
      <option value={elm.value} key={index}>
        {elm.name}
      </option>
    ));
  };

  const handleMint = async () => {
    console.log(nftName);
    console.log(nftBrand);
    console.log(watchCase);
    console.log(wristBand);
    console.log(watchDial);
    console.log(watchIndex);
    console.log(watchMovment);
    console.log(waterProof);
    console.log(transferFee);
    console.log(description);
    if (file != null) {
      const URI = await new Ipfs(file).pinFileToIPFS();
      XummAuth.createAndSubscribeToNftMint(account, transferFee, URI, [
        { Memo: { MemoType: "name", MemoData: nftName } },
        { Memo: { MemoType: "description", MemoData: description } },
        { Memo: { MemoType: "brand", MemoData: nftBrand } },
        { Memo: { MemoType: "watchCase", MemoData: watchCase } },
        { Memo: { MemoType: "wristBand", MemoData: wristBand } },
        { Memo: { MemoType: "watchDial", MemoData: watchDial } },
        { Memo: { MemoType: "watchIndex", MemoData: watchIndex } },
        { Memo: { MemoType: "watchMovment", MemoData: watchMovment } },
        { Memo: { MemoType: "waterProof", MemoData: waterProof } },
        { Memo: { MemoType: "transferFee", MemoData: transferFee.toString() } },
      ]);
    } else {
      console.log("No file selected");
    }
  };

  const onSelectHandle = (e: FileUploadSelectEvent) => {
    if (e.files.length > 0) {
      setFile(e.files[0]);
    }
  };

  return (
    <div>
      <Stack marginTop="20" width={{ base: "90vw", md: "40vw" }} marginX="auto">
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
        <div>
          <h3>{APP_TEXTS.watchImage}</h3>
          <FileUpload
            mode="basic"
            name="demo[]"
            url="/api/upload"
            accept="image/*"
            maxFileSize={1000000}
            onSelect={onSelectHandle}
          />
        </div>
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
