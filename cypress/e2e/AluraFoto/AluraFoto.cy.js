describe('Usabilidade pagina inicial', function () {
    beforeEach(function () {

        cy.visit('https://alura-fotos.herokuapp.com/#/home')
    })

    it('Dado que estou na tela inicial', ()=> {

        cy.contains('.text-center', 'Login')
            .should('be.visible')

        cy.title().should('be.equal', 'Sign in' )
                                        

    })

    it('Quando efetuo login sem preencher os campos ', ()=> {

        cy.get('button[type="submit"').click({force: true})
        cy.get('.text-danger.d-block.mt-2').should('be.visible')
        
    })

    it('Então exibe mensagem dos campos obrigatórios', ()=>{

        cy.get('button[type="submit"').click({force: true})
        cy.get('.text-danger.d-block.mt-2').should('be.visible')

        cy.contains('.text-danger.d-block.mt-2', 'User name is required!')
            .should('be.visible')

        cy.contains('.text-danger.d-block.mt-2', 'Password is required!')   
            .should('be.visible') 

    })


})