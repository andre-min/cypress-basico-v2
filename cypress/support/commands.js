Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('Andre')
    cy.get('#lastName').type('Minato')
    cy.get('#email').type('andre.minato610@gmail.com')
    cy.get('#phone').type('11992228979')
    cy.get('#open-text-area').type('Teste')
    cy.get('button[type="submit"]').click()
    //cy.contains('button', 'Enviar').click()
})