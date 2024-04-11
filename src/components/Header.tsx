import { NavLink } from "react-router-dom";
import { navBarItems } from "../utils/constant";
import { Box } from "@chakra-ui/react";
import Hamburger from "./hamburger_bar/Hamburger";
import { HeaderType } from "../utils/types";
import { AppDispatch } from "../store";
import { useDispatch } from "react-redux";
import { setOpenClassBackDrop } from "../features/User/user.slice";

const HeaderLinks = (closeBlackDrop: () => void) => {
  return navBarItems.map((elm, index) => (
    <NavLink
      to={elm.path}
      style={{ color: "white" }}
      key={index}
      onClick={() => closeBlackDrop()}
      data-test-id={"nav-link" + "-" + elm.name.toLocaleLowerCase()}
    >
      <li style={{ listStyle: "none", cursor: "pointer" }}>{elm.name} </li>
    </NavLink>
  ));
};

const Header: React.FC<HeaderType> = ({ getOpenClassFun }) => {
  const dispatch: AppDispatch = useDispatch();

  return (
    <nav>
      <Box display={["none", "flex"]} gap="30px">
        {HeaderLinks(() => dispatch(setOpenClassBackDrop("")))}
      </Box>

      <Hamburger
        getOpenClassFun={(openClassBlackDrop) =>
          dispatch(setOpenClassBackDrop(openClassBlackDrop))
        }
      />
    </nav>
  );
};

export { HeaderLinks };

export default Header;
