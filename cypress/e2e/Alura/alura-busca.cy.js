describe('Alura busca cursos', function(){
    beforeEach(function(){
       cy.visit('https://www.alura.com.br/')
       

    })
    
    it('buscar curso de java', function(){
        cy.get('input[name="query"]')
            .type('Java', {force: true})

        cy.get('button[type="submit"]').click({force: true}) 

        cy.get('h4.busca-resultado-nome')
            .should('contain', 'Formação Java e Orientação a Objeto')

        cy.title().should('be.equal', 'Busca de cursos online de Java | Alura')
            
    })
})
