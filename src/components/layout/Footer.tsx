import React from "react";
import { APP_TEXTS } from "../../utils/constant";
import { HStack, Text } from "@chakra-ui/react";
import { TwitterLogo, InstagramLogo } from "../../assets";

interface FooterProps {
  title: string;
  children: React.ReactNode;
}

const _explorerLinks = [
  { name: "Marketplace", path: "/marketplace" },
  { name: "Rankings", path: "/mint" },
  { name: "Connect a wallet", path: "/legal" },
];

const _HeaderSection: React.FC<FooterProps> = ({ title, children }) => {
  return (
    <div>
      <Text
        as="h3"
        className="font-bold text-[22px] leading-[160%] mb-[20px] lg:mb-[30px]"
        fontFamily="Space Mono"
      >
        {title}
      </Text>
      {children}
    </div>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="footer w-full bg-[#3B3B3B] px-[30px] py-[40px] md:px-[72px] md:py-[40px] lg:px-[115.29px] lg:py-[40px] block lg:flex lg:justify-between">
      <_HeaderSection title={APP_TEXTS.watchChainMarketPlace}>
        <div>
          <Text
            as="p"
            className="text-[16px] leading-[140%] text-[#CCCCCC] lg:w-[238px] mb-[20px]"
            fontFamily="Work Sans"
          >
            {APP_TEXTS.subFooterDescription}
          </Text>
          <Text
            className="text-[16px] leading-[140%] text-[#CCCCCC] mb-[15px] cursor-pointer"
            fontFamily="Work Sans"
          >
            {APP_TEXTS.joinCommunity}
          </Text>
          <HStack>
            <img src={TwitterLogo} className="cursor-pointer" />
            <img src={InstagramLogo} className="cursor-pointer" />
          </HStack>
        </div>
      </_HeaderSection>

      <_HeaderSection title={APP_TEXTS.explore}>
        <ul>
          {_explorerLinks.map((link, index) => (
            <li key={index}>
              <Text
                className={`text-[16px] leading-[140%] text-[#CCCCCC] cursor-pointer ${
                  index != _explorerLinks.length - 1 ? "mb-[15px]" : "mb-[0px]"
                }`}
                fontFamily="Work Sans"
              >
                {link.name}
              </Text>
            </li>
          ))}
        </ul>
      </_HeaderSection>

      <_HeaderSection title={APP_TEXTS.joinNewsletter}>
        <p></p>
      </_HeaderSection>
    </footer>
  );
};

export default Footer;
