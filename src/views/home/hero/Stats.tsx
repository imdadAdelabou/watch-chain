import React from "react";
import { Text } from "@chakra-ui/react";
import { StatsProps } from "../../../utils/types";

const Stats: React.FC<StatsProps> = ({ label, value }) => {
  return (
    <div>
      <Text
        fontWeight="bold"
        fontSize="28px"
        lineHeight="140%"
        fontFamily="Space-mono"
      >
        {value}
      </Text>
      <Text fontSize="23.99px" lineHeight="160%">
        {label}
      </Text>
    </div>
  );
};

export default Stats;
