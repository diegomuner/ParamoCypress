import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I navigate to demo casino homepage", () => {
  // visit is used to navigate to baseUrl which is defined in cypress.config.js
    cy.visit("/")
});


When("I see and close the welcome modal", () => {

cy.closeWelcomeModal();

});

  
When("User clicks sign up and populates sign up form", () => {  

    cy.signUp();
    
});

Then("Verify user signed up", () => {  

  cy.verifyCongratulations();

});



