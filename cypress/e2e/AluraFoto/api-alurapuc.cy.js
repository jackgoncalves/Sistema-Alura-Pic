describe('Busca fotos e dados', () => {

    it('Dado que busco as fotos do usuário', () => {
        cy.request({
            method: 'GET',
            url: 'https://apialurapic.herokuapp.com/flavio/photos'
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body[0]).to.have.property('description')
            expect(res.body[0].description).to.be.equal('Farol iluminado')
        }

        )

    })

    it('Dado que busco as fotos do usuário', () => {
        cy.request('https://apialurapic.herokuapp.com/flavio/photos')
            .should(function (resposta) {
                // console.log(resposta)
                const { status, body } = resposta

                expect(status).to.equal(200)
                expect(body).is.not.empty
                expect(body[1]).to.have.property('description')
                expect(body[1].description).to.include('Visão')
                expect(body[1].description).to.be.equal('Visão pela janela')

            })

    })

    it('Dado que busco as fotos do usuário', () => {
        cy.request('https://apialurapic.herokuapp.com/flavio/photos')
            .should((resposta) => {

                const { status, body } = resposta

                expect(status).to.equal(200)

            })
    })

    it.only('Quando faço login do usuário', () => {
        cy.request({
            method: 'POST',
            url: 'https://apialurapic.herokuapp.com/user/login',
            body: Cypress.env()
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('id')
            expect(res.body.id).to.be.equal(1)
            expect(res.body).to.have.property('email')
            expect(res.body.email).to.be.equal("flavio@alurapic.com.br")
        }

        )

    })



})