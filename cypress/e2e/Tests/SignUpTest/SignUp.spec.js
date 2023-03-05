import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


Given("I navigate to demo casino homepage", () => {
  // visit is used to navigate to baseUrl which is defined in cypress.config.js
    cy.visit("/")
});


When("I see and close the welcome modal", () => {
    cy.get('div.modal__content')
        .should('exist')
// We check the presence of Welcome modal (looks like it shows up everytime homepage is loaded and there is no cookie)
        .within(() => {
            cy.get('h3').should('contain', 'Welcome');
            cy.get('p').should('contain', 'Hope you\'ll enjoy our casino. Please make sure you know everything about the safe gaming. Find all the information in our articles.');
        });
// Got it is one of the buttons present to close the modal. Here we also have the "x"   
    cy.get('button.button--s2.button--t1')
        .contains('Got it')
        .click();

});

  
When("User clicks on sign up button", () => {  
    cy.get('a.header-button--registration:contains("Sign up")')
        .click()
});


When("User populates sign up form", () => {  
   //With cy.task we are calling the function freshUser() defined in cypress.config.js, which returns a user object with the values, username, email and password. We use faker to generate random data for the user and store it in those variables.
    cy.task('freshUser').then((user) => {
        cy.get('label[for="core__protected_modules_user_yiiForm_RegistrationForm_terms_and_conditions"]')
      .click()
    cy.get('input.input[data-test="input-email"]')
      .type(user.email) 
    cy.get('input.input[data-test="input-password"]')
      .type(user.password)
    cy.get('input.input[data-test="input-password_confirmation"]')
      .type(user.password)            
    cy.get('label[for="bonus-0"]')
      .click()
    cy.get('button[data-test="control-submit"]')
      .click()
    });
});

Then("Verify user signed up", () => {  
  //Here we check that the text congratulations that is displayed after signing up successfully is present on the screen after completing all previous steps.
  cy.get('[class="notification__title"]')
    .contains(' Congratulations! ')

});



