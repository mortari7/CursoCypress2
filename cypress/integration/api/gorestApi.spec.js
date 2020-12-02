/// <reference types ="Cypress" /> 

const faker = require('faker')

Cypress.config('baseUrl', 'https://gorest.co.in')

describe('Test request gorest.api', () => {
    it('call the request gorest api', ()=>{
        cy.gorestApiRequest()
        .then(response =>{
            expect(response.status).to.equal(200)          
        })
    })

    it('call the GET request gorest api with parameters', () =>{
        //cy.request('https://gorest.co.in/public-api/users/?id=1320')
        cy.request('/public-api/users/?id=1320')
            .then(response =>{
                expect(response.status).to.equal(200)
                expect(response.body.data[0]).has.property('name', "Sukanya Mehra")
                expect(response.body.data[0]).has.property('gender', "Female")
                //expect(response.body.data).has.length(7);
                expect(response.body.data[0]).not.has.property('price')
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
               //expect(response.body.data[0]).has.property('email', dataInsert.email)
        });
    })

});