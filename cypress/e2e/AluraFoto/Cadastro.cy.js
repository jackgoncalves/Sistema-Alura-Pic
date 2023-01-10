describe('Cadastro no sistema', function () {
    beforeEach(function () {

        cy.visit('https://alura-fotos.herokuapp.com/#/home')
    })

    it('Vefica mensagem validação', function () {
        // cy.get('a[href="#/home/signup"]').click()
        cy.contains('a', 'Register now')
            .click()

        cy.contains('button', 'Register')
            .click()

        cy.contains('.text-danger.d-block.mt-2', 'Email is required!')
            .should('be.visible')

        cy.contains('button', 'Register')
            .click()

        // cy.contains('.text-danger.d-block.mt-2', 'Full name is required!')
        //     .should('be.visible')

        // cy.contains('.text-danger.d-block.mt-2', 'User name is required!')
        //     .should('be.visible')

        // cy.contains('.text-danger.d-block.mt-2', 'Password is required!')
        //     .should('be.visible')

        cy.get('.text-danger.d-block.mt-2')
            .should('have.length', 4)

    })

    it('verifica mensagem de e-mail inválido', function () {

        cy.contains('a', 'Register now').click()
        cy.get('input[placeholder="email"]').type('Jack')
        cy.contains('button', 'Register').click()

        cy.get('.text-danger.d-block.mt-2').should('have.text', 'Invalid e-mail')
        // cy.contains('.text-danger.d-block.mt-2', 'Invalid e-mail').should('be.visible')

    })

    it('verificar mensagem de senha com menos de 8 caracteres', function(){

        cy.contains('a', 'Register now').click()
        cy.get('input[placeholder="password"]').type('1234')
        cy.contains('button', 'Register').click()

        // cy.get('.text-danger.d-block.mt-2').should('have.text', 'Mininum length is 8')
        cy.contains('.text-danger.d-block.mt-2', 'Mininum length is 8').should('be.visible')

    })  

    
    const usuarios = require('../../fixtures/usuarios.json')
    usuarios.forEach(usuario => {
    it(`Registrar novo usuário ${usuario.userName}`, () => {

            cy.contains('a', 'Register now').click()
            cy.get('input[placeholder="email"]').type(usuario.email)
            cy.get('input[placeholder="full name"]').type(usuario.fullName)
            cy.get('input[placeholder="user name"]').type(usuario.userName)
            cy.get('input[placeholder="password"]').type(usuario.password)
            
        })

    })

})
