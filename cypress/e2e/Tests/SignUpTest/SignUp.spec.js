import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


Given("I navigate to demo casino homepage", () => {
    cy.visit("/")
});


When("I see and close the welcome modal", () => {
    cy.get('div.modal__content')
        .should('exist')
// We check the presence of Welcome modal (looks like it shows up everytime homepage is loaded)
        .within(() => {
            cy.get('h3').should('contain', 'Welcome');
            cy.get('p').should('contain', 'Hope you\'ll enjoy our casino. Please make sure you know everything about the safe gaming. Find all the information in our articles.');
        });
    cy.get('button.button--s2.button--t1')
        .contains('Got it')
        .click();

});

 
   //     Then: Validate success screen
   
    // We check the presence of Welcome modal (looks like it shows up everytime homepage is loaded)
    
When("User clicks on sign up button", () => {  
    cy.get('a.header-button--registration:contains("Sign up")')
        .click()
});


Then("User populates sign up form", () => {  
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







