# Terminal Lab Cypress 2

This project contains Cypress end-to-end tests for the Software Automated Testing terminal lab. The selected website is [Sauce Demo](https://www.saucedemo.com), a public practice e-commerce application.

## Setup

Install dependencies:

```bash
npm install
```

## Run All Tests

```bash
npm test
```

## Run Cypress Interactively

```bash
npm run cy:open
```

## Task 1 Coverage

Task 1 tests are stored in `cypress/e2e/task1/`.

- `login-valid.cy.js`, `login-invalid-password.cy.js`, and `login-empty-validation.cy.js` cover valid login, incorrect password, and empty-field validation.
- `navigation-cart-link.cy.js` and `navigation-sequence.cy.js` cover cart navigation and visiting two pages in sequence.
- `form.cy.js` covers checkout form submission and verifies the overview page.

Each Task 1 test uses `cy.visit()`, `cy.get()`, and `cy.should()`.

## Task 2 Coverage

Task 2 tests are stored in `cypress/e2e/task2/`.

- `assertions_aliases.cy.js` demonstrates `be.visible`, `have.text`, `have.attr`, a negative assertion, alias usage, and a `beforeEach()` hook.
- `custom_command.cy.js` uses the custom `cy.login()` command from `cypress/support/commands.js`.

## Difficulty Faced

One difficulty was choosing stable selectors that would not break when the page layout changed. I solved this by using Sauce Demo's `data-test` attributes wherever possible because they are intended for automated testing. Another challenge was keeping Task 1 and Task 2 separate while still avoiding repeated login code. I kept Task 1 explicit because the instructions required core Cypress commands in each test, and used a custom command only in Task 2. This made the tests both clear for grading and reusable where the assignment specifically asked for it.
