describe("Task 2 - Custom Command", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("logs in using the reusable cy.login() custom command", () => {
    cy.login("standard_user", "secret_sauce");
    cy.get(".title").should("have.text", "Products");
    cy.get("[data-test='shopping-cart-link']").should("be.visible");
    cy.screenshot("task2-custom-command-login-success");
  });
});
