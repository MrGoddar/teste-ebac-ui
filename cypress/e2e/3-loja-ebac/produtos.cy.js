/// <reference types="cypress"/>

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });
    
    it('Deve selecionar um produto da lista', () => {
        //cy.get('.block-inner ')
        //.last()
        //.eq(2)
        cy.get('.products > .row')
        .contains('Abominable Hoodie')
        .click()
        cy.get('#tab-title-description > a').should('contain', 'Descrição')
    });
});