/// <reference types="cypress"/>

import produtosPage from "../../support/page objects/produtos.page";

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        produtosPage.visitarUrl()
    });
    
    it('Deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutoLista('Abominable Hoodie')
            cy.get('#tab-title-description > a').should('contain', 'Descrição')
    });
    it('Deve buscar um produto com sucesso', () => {
        produtosPage.buscarProduto('Abominable Hoodie')
        cy.get('.product_title').should('contain', 'Abominable Hoodie')
    });

    it('Deve visitar a pagina do produto', () => {
        produtosPage.visitarProduto('Augusta Pullover Jacket')
        cy.get('.product_title').should('contain', 'Augusta Pullover Jacket')
    });

    it('Deve adicionar produto no carrinho', () => {
        produtosPage.buscarProduto('Augusta Pullover Jacket')
        produtosPage.addPrdutoCarrinho('M', 'Blue', '1')
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message').should('contain', '“Augusta Pullover Jacket” foi adicionado no seu carrinho.')
    });

     it('Deve adicionar produto no carrinho buscando da massa de dados', () => {
        cy.fixture('produtos').then(dados =>{
            produtosPage.buscarProduto(dados[0].nomeProduto)
            produtosPage.addPrdutoCarrinho(dados[0].tamanho, dados[0].cor, dados[0].quantidade)
            cy.get('.single_add_to_cart_button').click()
            cy.get('.woocommerce-message').should('contain', dados[0].nomeProduto)

        })
        
    });
});