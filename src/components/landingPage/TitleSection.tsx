import React from "react";
import { Text } from "@chakra-ui/react";

interface TitleSectionProps {
  title: string;
}

const TitleSection: React.FC<TitleSectionProps> = ({ title }) => {
  return (
    <Text fontSize="3xl" as="b" marginBottom="4">
      {title}
    </Text>
  );
};

export default TitleSection;
