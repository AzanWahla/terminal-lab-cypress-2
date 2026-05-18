describe("Task 1 - Navigation Test 2", () => {
  it("visits inventory and cart pages in sequence", () => {
    cy.visit("/");
    cy.get("[data-test='username']").type("standard_user");
    cy.get("[data-test='password']").type("secret_sauce");
    cy.get("[data-test='login-button']").click();
    cy.get(".title").should("have.text", "Products");
    cy.get("[data-test='shopping-cart-link']").click();
    cy.get(".title").should("have.text", "Your Cart");
    cy.url().should("include", "/cart.html");
    cy.screenshot("task1-navigation-sequence-cart-page");
  });
});
