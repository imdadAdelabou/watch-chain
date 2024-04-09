const APP_TEXTS = {
  connectWithMetaMask: "MetaMask",
  signIn: "Sign In",
  logOut: "Log Out",
  connectWallet: "Connect wallet",
  connectWithXumm: "Xumm",
  myNft: "My NFTs",
  transferFee: "(% Transfer Fee)",
  nftName: "The NFT name",
  nftBrand: "The watch brand",
  watchCase: "The watch case",
  wristBrand: "The wrist band",
  watchDials: "The watch dial",
  watchIndex: "The watch index",
  movmentType: "The watch movement type",
  waterProof: "The watch water proof",
  description: "A short description of the watch",
  theTransferFee: "The transfer fee between (0-50000)",
  mintLabel: "Mint",
  lorenIpsum:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit",
};

const navBarItems = [
  { name: "Home", path: "/" },
  { name: "Marketplace", path: "/marketplace" },
  { name: "Mint", path: "/mint" },
  { name: "Legal", path: "/legal" },
  { name: "Support", path: "/support" },
];

const watchCasesTypes = [
  { name: "Stainless steel", value: "stainless" },
  { name: "Gold", value: "gold" },
  { name: "Titanium", value: "titanium" },
];

const wristsBandsTypes = [
  { name: "Leather", value: "leather" },
  { name: "Steel", value: "steel" },
  { name: "Rubber", value: "rubber" },
  { name: "Fabric", value: "fabric" },
];

const watchDialsTypes = [
  { name: "Analog", value: "analog" },
  { name: "Digital", value: "digital" },
  { name: "Chronograph", value: "chronograph" },
];

const watchIndexTypes = [
  { name: "Arabic numerals", value: "arabic-numerals" },
  { name: "Sticks", value: "sticks" },
  { name: "Roman", value: "roman" },
];

const watchMovmentTypes = [
  {
    name: "Automatic",
    value: "automatic",
  },
  { name: "Quartz", value: "quartz" },
  { name: "Mechanical", value: "mechanical" },
];

const waterProofTypes = [
  { name: "30 meters", value: "30m" },
  { name: "50 meters", value: "50m" },
  { name: "100 meters", value: "100m" },
  { name: "200 meters", value: "200m" },
];

export {
  APP_TEXTS,
  navBarItems,
  watchCasesTypes,
  wristsBandsTypes,
  watchDialsTypes,
  watchIndexTypes,
  watchMovmentTypes,
  waterProofTypes,
};
