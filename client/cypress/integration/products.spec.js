/// <reference types="cypress"/>

context("Products Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/products");
  });

  it("should find Products page", () => {
    cy.get("h1").contains("All Products");
  });
});
