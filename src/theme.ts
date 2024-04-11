import { extendTheme } from "@chakra-ui/react";

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
