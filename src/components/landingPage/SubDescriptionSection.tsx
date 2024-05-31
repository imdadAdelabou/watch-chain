import React from "react";
import { Text } from "@chakra-ui/react";
import { SubDescriptionProps } from "../../utils/types";

const SubDescriptionSection: React.FC<SubDescriptionProps> = ({ title }) => {
  return (
    <Text
      fontSize="22px"
      lineHeight="160%"
      fontFamily="Work-sans"
      fontWeight="400"
    >
      {title}
    </Text>
  );
};

export default SubDescriptionSection;
