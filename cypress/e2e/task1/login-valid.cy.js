describe("Task 1 - Login Test 1", () => {
  it("logs in with valid username and password", () => {
    cy.visit("/");
    cy.get("[data-test='username']").type("standard_user");
    cy.get("[data-test='password']").type("secret_sauce");
    cy.get("[data-test='login-button']").click();
    cy.get(".title").should("have.text", "Products");
    cy.url().should("include", "/inventory.html");
    cy.screenshot("task1-valid-login-products-page");
  });
});
