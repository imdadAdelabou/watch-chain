import { Link, Text } from "@chakra-ui/react";
import { APP_TEXTS } from "../utils/constant";
import { QrXummModalType } from "../utils/types";

const QrXummModal: React.FC<QrXummModalType> = ({ qr, url }) => {
  return (
    <div>
      <Text as="h3" marginBottom="4" textAlign="center">
        {APP_TEXTS.scanQr}
      </Text>
      <img src={qr} style={{ display: "block", margin: "auto" }} />
      <Text as="p" marginTop="4" textAlign="center">
        {`${APP_TEXTS.clickOnLink}`}
        <Link href={url} isExternal color="green">
          {APP_TEXTS.confirm}
        </Link>
      </Text>
    </div>
  );
};

export default QrXummModal;
