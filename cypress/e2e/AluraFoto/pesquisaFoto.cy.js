describe('Pesquisa foto no feed', ()=>{
    it('Dado que eu faço login no sistema', ()=>{

        cy.visit('https://alura-fotos.herokuapp.com/#/home')
        cy.InserirLoginValido(Cypress.env('UserName'), Cypress.env('password'))
    })

    it('Quando pesquiso a foto desejada', ()=>{

        cy.visit('https://alura-fotos.herokuapp.com/#/home')
        cy.InserirLoginValido(Cypress.env('UserName'), Cypress.env('password'))

        cy.get('input[type="search"]').type('Farol')
    })

    it.only('Então a foto desejada aparece', ()=>{

        cy.visit('https://alura-fotos.herokuapp.com/#/home')
        cy.InserirLoginValido(Cypress.env('UserName'), Cypress.env('password'))
        
        cy.get('input[type="search"]').type('Farol')
    
        cy.get('img.img-thumbnail[alt="Farol iluminado"]').should('be.visible')
    })

})