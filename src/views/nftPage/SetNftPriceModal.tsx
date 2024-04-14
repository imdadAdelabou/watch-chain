import React from "react";
import CustomModal from "../../components/CustomModal";
import { APP_TEXTS } from "../../utils/constant";
import { SetNftPriceModalProps } from "../../utils/types";
import { Button, NumberInput, NumberInputField } from "@chakra-ui/react";

const SetNftPriceModal: React.FC<SetNftPriceModalProps> = ({
  title,
  isOpen,
  onClose,
  handleOnClickButton,
  getCurrentValue,
}) => {
  const [amount, setAmount] = React.useState<string>("");

  return (
    <CustomModal title={title} isOpen={isOpen} onClose={onClose}>
      <div>
        <NumberInput
          onChange={(value) => {
            setAmount(value);
            getCurrentValue(value);
          }}
          value={amount}
          data-test-id="nft-set-price-input"
        >
          <NumberInputField placeholder={APP_TEXTS.priceLabel} />
        </NumberInput>

        <Button
          marginTop="8"
          marginBottom="3"
          colorScheme="blue"
          display="block"
          marginX="auto"
          onClick={handleOnClickButton}
        >
          {APP_TEXTS.setPrice}
        </Button>
      </div>
    </CustomModal>
  );
};

export default SetNftPriceModal;
