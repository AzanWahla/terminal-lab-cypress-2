describe("Task 1 - Login Test 3", () => {
  it("shows validation when both fields are empty", () => {
    cy.visit("/");
    cy.get("[data-test='login-button']").click();
    cy.get("[data-test='error']").should("be.visible");
    cy.get("[data-test='error']").should("contain.text", "Username is required");
  });
});
