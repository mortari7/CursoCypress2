/// <reference types ="Cypress" /> 

const faker = require('faker')

describe('Test request gorest.api', () => {

    const data = {
        name: `Erika ${faker.random.words(4)}`,
        email: `erica@trust-nitzsche.info`,
        gender: `Female`,
        status: "Active",
    }

    it('call the request gorest api', ()=>{
        cy.gorestApiRequest()
        .then(response =>{
            expect(response.status).to.equal(200)          
        })
    })

    it('insert data to gorest api', ()=> {
        cy.gorestInsert()
        cy.gorestFind(data)
            .then(response=>{
               expect(response.status).to.equal(200)          
               //expect(response.body.name).to.equal('Nawal')          
            })

    })

});