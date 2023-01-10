describe('Login no sistema', function () {
    beforeEach(function () {

        cy.visit('https://alura-fotos.herokuapp.com/#/home')
    })

    it('Dado que insiro login válido', function(){

        cy.InserirLoginInvalido()

    })


    
    it('Dado que insiro login inválido', function(){

        cy.InserirLoginValido(Cypress.env('userName'), Cypress.env('password'))

    })


})
