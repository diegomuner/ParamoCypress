import * as locators from "../fixtures/casinoHome.json"

Cypress.Commands.add("closeWelcomeModal", () => {
    cy.get('div.modal__content').should('exist').within(() => {
      cy.get('h3').should('contain', 'Welcome');
      cy.get('p').should('contain', 'Hope you\'ll enjoy our casino. Please make sure you know everything about the safe gaming. Find all the information in our articles.');
      cy.get(locators.gotItButton).contains('Got it').click();
    });
  });

  Cypress.Commands.add("signUp", () => {
    cy.get(locators.signUpButton)
        .click()
    cy.task('freshUser').then((user) => {
      cy.get(locators.termsAndConditions).click();
      cy.get(locators.emailField).type(user.email);
      cy.get(locators.passwordField).type(user.password);
      cy.get(locators.passwordRepeatField).type(user.password);
      cy.get(locators.noBonus).click();
      cy.get(locators.SignUpSubmit).click();
    });
  });


  Cypress.Commands.add("verifyCongratulations", () => {
    cy.get(locators.CongratulationsText)
    .contains(' Congratulations! ')
  });