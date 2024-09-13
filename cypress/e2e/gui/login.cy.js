/// <reference types ="Cypress" /> 

//Esta é uma classe de exemplo
//Tentar praticar em outro site depois
describe('Login', () =>{
   it('successfully', () =>{
        cy.login();

        cy.get('.qa-user-avatar'().should('exist'));
   }); 
})