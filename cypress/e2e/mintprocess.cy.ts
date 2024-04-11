describe("Test the minting process", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("passes", () => {
    const navLinkMintElm = cy.get('[data-test-id="nav-link-mint"]');
    navLinkMintElm.should("be.visible");
  });
});
