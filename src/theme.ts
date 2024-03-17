import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";

// Version 1: Using objects
const theme = extendTheme({
  components: {},
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: "",
        color: "white",
        fontWeight: "",
      },
      // styles for the `a`
      a: {
        color: "teal.500",
        _hover: {
          textDecoration: "underline",
        },
      },
    },
  },
});

export default theme;
