describe("Task 1 - Form Test", () => {
  it("Form Test 1: fills checkout information and reaches the overview page", () => {
    cy.visit("/");
    cy.get("[data-test='username']").type("standard_user");
    cy.get("[data-test='password']").type("secret_sauce");
    cy.get("[data-test='login-button']").click();
    cy.get("[data-test='add-to-cart-sauce-labs-backpack']").should("be.visible").click();
    cy.get("[data-test='shopping-cart-link']").click();
    cy.get("[data-test='checkout']").should("be.visible").click();
    cy.get("[data-test='firstName']").type("Azan");
    cy.get("[data-test='lastName']").type("Wahla");
    cy.get("[data-test='postalCode']").type("54000");
    cy.get("[data-test='continue']").click();
    cy.get(".title").should("have.text", "Checkout: Overview");
    cy.get(".summary_info").should("be.visible");
    cy.screenshot("task1-checkout-form-overview");
  });
});
