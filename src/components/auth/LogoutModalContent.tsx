import { Text } from "@chakra-ui/react";
import { APP_TEXTS } from "../../utils/constant";
import CustomBtn from "../CustomBtn";
import { LogoutModalContentProps } from "../../utils/types";

const LogoutModalContent: React.FC<LogoutModalContentProps> = ({
  cancelCallBack,
  logoutCallBack,
}) => {
  return (
    <div>
      <Text textAlign="center" fontSize={"18px"}>
        {APP_TEXTS.wantReallyToLogout}
      </Text>
      <div className="flex gap-[20px] my-[20px] justify-center items-center">
        <CustomBtn label={APP_TEXTS.cancel} onClick={cancelCallBack} />
        <CustomBtn
          label={APP_TEXTS.logOut}
          onClick={logoutCallBack}
          color="red"
        />
      </div>
    </div>
  );
};

export default LogoutModalContent;
