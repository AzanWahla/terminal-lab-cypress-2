describe("Task 1 - Navigation Test 1", () => {
  it("opens the cart page from the cart link", () => {
    cy.visit("/");
    cy.get("[data-test='username']").type("standard_user");
    cy.get("[data-test='password']").type("secret_sauce");
    cy.get("[data-test='login-button']").click();
    cy.get("[data-test='shopping-cart-link']").should("be.visible").click();
    cy.get(".title").should("have.text", "Your Cart");
    cy.url().should("include", "/cart.html");
    cy.screenshot("task1-navigation-cart-page");
  });
});
