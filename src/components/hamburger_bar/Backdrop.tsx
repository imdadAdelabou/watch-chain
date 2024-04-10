import { Box } from "@chakra-ui/react";
import { HeaderLinks } from "../Header";
import { AppDispatch } from "../../store";
import { useDispatch } from "react-redux";
import { setOpenClassBackDrop } from "../../features/User/user.slice";

interface BackDropType {
  openClass: string;
}

const BackDrop: React.FC<BackDropType> = ({ openClass }) => {
  const dispatch: AppDispatch = useDispatch();

  return (
    <div id="nav" className={`nav nav--${openClass}`}>
      <div className="backdrop"></div>
      <Box>{HeaderLinks(() => dispatch(setOpenClassBackDrop("")))}</Box>
    </div>
  );
};

export default BackDrop;
