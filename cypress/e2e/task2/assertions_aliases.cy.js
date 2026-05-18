describe("Task 2 - Assertions, Negative Assertions, Aliases, and beforeEach", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("uses should('be.visible') on the login button", () => {
    cy.get("[data-test='login-button']").should("be.visible");
  });

  it("uses should('have.text', ...) on the app logo", () => {
    cy.get(".login_logo").should("have.text", "Swag Labs");
  });

  it("uses should('have.attr', ...) on the username field", () => {
    cy.get("[data-test='username']").should("have.attr", "placeholder", "Username");
  });

  it("uses a negative assertion for a missing error message", () => {
    cy.get("[data-test='error']").should("not.exist");
  });

  it("uses an alias to save and reuse the username input", () => {
    cy.get("[data-test='username']").as("usernameInput");
    cy.get("@usernameInput").should("be.visible").type("standard_user");
    cy.get("@usernameInput").should("have.value", "standard_user");
  });
});
