/// <reference types="cypress"/>
const perfil = require('../../fixtures/perfil.json')

describe('Funcionalidade: Login', () => {


    beforeEach(() => {
        cy.visit('minha-conta')
    });

    afterEach(() => {
        cy.screenshot()
    });
    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('matheuso54@hotmail.com')
        cy.get('#password').type('@teste123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, matheuso54 (não é matheuso54? Sair)'
        )

    })
    it('deve exibir uma mensagem de erro ao inserir usuário inválido', () => {

        cy.get('#username').type('matheuso54@hotmailcom')
        cy.get('#password').type('@teste123')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain', 'Erro: O usuário matheuso54@hotmailcom não está registrado neste site. Se você não está certo de seu nome de usuário, experimente o endereço de e-mail')
        //cy.get('.woocommerce-error').should('contain', 'Erro: O usuário matheuso54@hotmailcom não está registrado neste site')
    });
    it('deve exibir uma mensagem de erro ao inserir senha inválida', () => {

        cy.get('#username').type('matheuso54@hotmail.com')
        cy.get('#password').type('@tete123')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain', 'Erro: A senha fornecida para o e-mail matheuso54@hotmail.com está incorreta. Perdeu a senha?')
         //cy.get('.woocommerce-error').should('contain', 'Erro: A senha fornecida para o e-mail matheuso54@hotmail.com está incorreta. Perdeu a senha?')
    });
    it ('Deve fazer login  com sucesso usando massa de dados', () => {
        cy.get('#username').type(perfil.usuário)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, matheuso54 (não é matheuso54? Sair)')
        
    });

    it.only ('Deve fazer login com sucesso usando fixture', () => {
       cy.fixture('perfil').then((dados) => { 
           cy.get('#username').type(dados.usuário, {log: false})
           cy.get('#password').type(dados.senha , { log: false})
           cy.get('.woocommerce-form > .button').click()
           cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, matheuso54 (não é matheuso54? Sair)')
       }); 
    });

    it.only('Deve fazer login com sucesso  usando Comandos CUstomizados', () => {
        cy.login('matheuso54@hotmail.com', '@teste123')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, matheuso54 (não é matheuso54? Sair)')
        
    });
});