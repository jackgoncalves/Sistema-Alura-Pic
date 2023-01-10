describe('Esse cenário realizar upload de arquivo', () => {

    it('Dado que acesso o sistema', () => {

        cy.visit('https://alura-fotos.herokuapp.com/#/home')
        cy.InserirLoginValido(Cypress.env('UserName'), Cypress.env('password'))

    })

    it('Quando adiciono uma nova foto no sistema', () => {

        cy.visit('https://alura-fotos.herokuapp.com/#/home')
        cy.InserirLoginValido(Cypress.env('UserName'), Cypress.env('password'))

        cy.get('.fa.fa-plus-circle.fa-2x').click()

        cy.get('input[type="file"]',)
            .selectFile('cypress/fixtures/foto.jpg', { force: true })

    })

    it('Então recebo mensagem de foto adicionada com sucesso', () => {

        cy.visit('https://alura-fotos.herokuapp.com/#/home')
        cy.InserirLoginValido(Cypress.env('UserName'), Cypress.env('password'))
        cy.get('.fa.fa-plus-circle.fa-2x').click()

        cy.get('input[type="file"]',)
            .selectFile('cypress/fixtures/foto.jpg', { force: true })

        cy.get('textarea[placeholder="photo description"]').type('Nova arte')
        cy.get('button[type="submit"]').click()

        cy.contains('.text-center.alert.alert-success', ' Upload complete ').should('be.visible')
    })



})