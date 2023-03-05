let user;

describe('Casino Home Page', () => {
  it('loads successfully', () => {
    cy.visit('/')

    // We check the presence of Welcome modal (looks like it shows up everytime homepage is loaded)
    cy.get('div.modal__content')
      .should('exist')
      .within(() => {
        cy.get('h3').should('contain', 'Welcome');
        cy.get('p').should('contain', 'Hope you\'ll enjoy our casino. Please make sure you know everything about the safe gaming. Find all the information in our articles.');
      });
  })

  it('closes the welcome modal' , () => {
    cy.visit('/')
    //We click Got it to close the Welcome Modal
    cy.get('button.button--s2.button--t1')
      .contains('Got it')
      .click();

  })

  it('signs up a new user', () => {
    cy.task('freshUser').then((user) => {
    cy.visit('/')
    //closes modal
    cy.get('button.button--s2.button--t1')
      .contains('Got it')
      .click();
    //signup button
    cy.get('a.header-button--registration:contains("Sign up")')
      .click()

   
    // inputs email in email field
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
  })
})

})