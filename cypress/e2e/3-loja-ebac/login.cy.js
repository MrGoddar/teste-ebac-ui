/// <reference types="cypress"/>

describe('Funcionalidade: Login', () => {

    it('Deve fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')

        cy.get('#username').type('matheuso54@hotmail.com')
        cy.get('#password').type('@teste123')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, matheuso54 (não é matheuso54? Sair)'
            
        )

    })
    

})