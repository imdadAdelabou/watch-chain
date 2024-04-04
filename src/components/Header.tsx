import { navBarItems } from "../utils/constant";
import { Box } from "@chakra-ui/react";

const Header: React.FC = () => {
  return (
    <nav>
      <Box display="flex" gap="30px">
        {navBarItems.map((elm, index) => (
          <li key={index} style={{ listStyle: "none", cursor: "pointer" }}>
            {elm.name}{" "}
          </li>
        ))}
      </Box>
    </nav>
  );
};

export default Header;
