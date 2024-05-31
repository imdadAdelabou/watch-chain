import React from "react";
import TitleSection from "../../../components/landingPage/TitleSection";
import { APP_TEXTS } from "../../../utils/constant";

const HowItWorks: React.FC = ({}) => {
  return (
    <div>
      <TitleSection title={APP_TEXTS.howItWorks} />
    </div>
  );
};

export default HowItWorks;
