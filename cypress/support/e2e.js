import "./commands";

Cypress.on("uncaught:exception", (err) => {
  if (err.message.includes("backtrace")) {
    return false;
  }
});

beforeEach(() => {
  cy.intercept("POST", "https://events.backtrace.io/**", {
    statusCode: 204,
    body: {}
  });
});
