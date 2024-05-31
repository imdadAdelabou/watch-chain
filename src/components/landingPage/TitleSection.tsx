import React from "react";
import { Text } from "@chakra-ui/react";
import { TitleSectionProps } from "../../utils/types";

const TitleSection: React.FC<TitleSectionProps> = ({ title }) => {
  return (
    <Text fontSize="3xl" as="b" marginBottom="4">
      {title}
    </Text>
  );
};

export default TitleSection;
