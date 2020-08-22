/// <reference types="cypress" />

context('Hello World!', () => {
  it("works!", () => {
    cy.visit("https://duckduckgo.com");
    cy.get("#search_form_input_homepage").type("Hello World!{enter}");
    cy.url().should("include", "?q=Hello+World");
  });
});