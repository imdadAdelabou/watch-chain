interface watchType {
  name: string;
  brand: string;
  watchCase: string;
  wristBand: string;
  watchDial: string;
  watchIndex: string;
  watchMovment: string;
  waterProof: string;
  description: string;
  transferFee: number;
  imagePath: string;
}

describe("Test the minting process", () => {
  let watchDetails: watchType;

  beforeEach(() => {
    watchDetails = {
      name: "Audemars Piguet X-900",
      brand: "Audemars Piguet",
      watchCase: "Gold",
      wristBand: "Leather",
      watchDial: "Digital",
      watchIndex: "Roman",
      watchMovment: "Automatic",
      waterProof: "100m",
      description: "A watch that will make you feel like a king",
      transferFee: 20,
      imagePath: "cypressTestsFile/pathNarutoUltim.jpeg",
    };
    cy.visit("http://localhost:5173");
  });

  it("Mint a NFT passes", () => {
    const navLinkMintElm = cy.get('[data-test-id="nav-link-mint"]');
    navLinkMintElm.should("be.visible");
    navLinkMintElm.first().click();
    const mintViewElm = cy.get('[data-test-id="mint-view"]');
    mintViewElm.should("be.visible");
    const nftElmName = cy.get('[data-test-id="nft-name-input"]');
    nftElmName.should("be.visible");
    nftElmName.type(watchDetails.name);
    const nftElmBrand = cy.get('[data-test-id="nft-brand-input"]');
    nftElmBrand.should("be.visible");
    nftElmBrand.type(watchDetails.brand);
    const nftElmWatchCase = cy.get('[data-test-id="nft-watch-case-input"]');
    nftElmWatchCase.should("be.visible");
    nftElmWatchCase.select(watchDetails.watchCase);
    const nftElmWristBand = cy.get('[data-test-id="nft-wrist-band-input"]');
    nftElmWristBand.should("be.visible");
    nftElmWristBand.select(watchDetails.wristBand);
    const nftElmWatchDial = cy.get('[data-test-id="nft-watch-dial-input"]');
    nftElmWatchDial.should("be.visible");
    nftElmWatchDial.select(watchDetails.watchDial);
    const nftElmWatchIndex = cy.get('[data-test-id="nft-watch-index-input"]');
    nftElmWatchIndex.should("be.visible");
    nftElmWatchIndex.select(watchDetails.watchIndex);
    const nftElmWatchMovment = cy.get(
      '[data-test-id="nft-watch-movment-input"]'
    );
    nftElmWatchMovment.should("be.visible");
    nftElmWatchMovment.select(watchDetails.watchMovment);
    const nftElmWaterProof = cy.get('[data-test-id="nft-water-proof-input"]');
    nftElmWaterProof.should("be.visible");
    nftElmWaterProof.select(watchDetails.waterProof);
    const nftElmTransferFee = cy.get('[data-test-id="nft-transfer-fee-input"]');
    nftElmTransferFee.should("be.visible");
    nftElmTransferFee.type(watchDetails.transferFee);
    const nftElmDescription = cy.get('[data-test-id="nft-description-input"]');
    nftElmDescription.should("be.visible");
    nftElmDescription.type(watchDetails.description);
    const mintButtonElm = cy.get('[data-test-id="mint-button"]');
    mintButtonElm.should("be.visible");
    mintButtonElm.click();
    const nftImageFileInputElm = cy.get('[data-test-id="nft-image-input"]');
    nftImageFileInputElm.should("be.visible");
    nftImageFileInputElm.first().selectFile(watchDetails.imagePath);
  });
});
