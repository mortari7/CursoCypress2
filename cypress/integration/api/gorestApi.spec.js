/// <reference types ="Cypress" /> 

const faker = require('faker')

describe('Test request gorest.api', () => {
    it('call the request gorest api', ()=>{
        cy.gorestApiRequest()
        .then(response =>{
            expect(response.status).to.equal(200)          
        })
    })

    const dataInsert = {
        name: `Erika ${faker.random.words(4)}`,
        email: `'teste@uol.com.br'`,
        gender: `'Female'`,
        status: `'Active'`
    }

    it('insert data to gorest api', () => {
        cy.gorestInsert(dataInsert)
        cy.gorestFind(dataInsert)
            .then(response=>{
               expect(response.status).to.equal(200)     
        });
    })

});