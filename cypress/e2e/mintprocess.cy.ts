describe("Test the minting process", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("passes", () => {
    const navLinkMintElm = cy.get('[data-test-id="nav-link-mint"]');
    navLinkMintElm.should("be.visible");
    navLinkMintElm.first().click();
    const mintViewElm = cy.get('[data-test-id="mint-view"]');
    mintViewElm.should("be.visible");
    const nftElmElm = cy.get('[data-test-id="nft-name-input"]');
    nftElmElm.should("be.visible");
  });
});
