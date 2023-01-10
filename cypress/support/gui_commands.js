Cypress.Commands.add('InserirLoginInvalido', function () {

    cy.get('input[placeholder="user name"]').type('flavio2')
    cy.get('input[placeholder="password"]').type('123')
    
    cy.on('window: alert', (str) => {
        experct(str).to.equal('Invalid user name or password')
    })

})


Cypress.Commands.add('InserirLoginValido', () => {

    cy.get('input[placeholder="user name"]').type('flavio')
    cy.get('input[placeholder="password"]').type('123', {log:false})
    cy.get('button[type="submit"]').click()

    cy.get('input[type="search"]').should('be.visible')

    cy.contains('a', 'Logout').click()

})



   






