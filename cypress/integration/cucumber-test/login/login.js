// login.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
// describe("My First Test", () => {
//   it("gets the login form", () => {
//     cy.visit("http://localhost:3000");
//     cy.get(".login-form").contains("LOGIN HERE");
//   });
// });

import { When, Then } from "cypress-cucumber-preprocessor/steps";

When("I enter the app", () => {
  cy.visit("http://localhost:3000");
});

Then("the LoginForm is rendered", () => {
  cy.get(".login-form").contains("LOGIN HERE");
});
