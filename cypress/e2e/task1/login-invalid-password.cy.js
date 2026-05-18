describe("Task 1 - Login Test 2", () => {
  it("shows an error for an incorrect password", () => {
    cy.visit("/");
    cy.get("[data-test='username']").type("standard_user");
    cy.get("[data-test='password']").type("wrong_password");
    cy.get("[data-test='login-button']").click();
    cy.get("[data-test='error']").should("be.visible");
    cy.get("[data-test='error']").should("contain.text", "Username and password do not match");
  });
});
