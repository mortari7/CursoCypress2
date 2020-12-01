/// <reference types ="Cypress" /> 

const accessToken = Cypress.env('gitlab_access_token')

Cypress.Commands.add('api_createProject', project =>{
    cy.request({
        method: 'POST', 
        url: `api/v4/projects/?private_token=${accessToken}`,
        body: {
            name: project.name,
            description: project.description,
            initialize_with_readme: true
        }
    })
})

Cypress.Commands.add('api_createIssue', issue =>{
    cy.api_createIssue(issue.project)
        .then(response => {
            cy.request({
                method: 'POST',
                url: `api/v4/projects/${response.body.id}/issues?private_token=${accessToken}`,
                body:{
                    title: issue.title,
                    description: issue.description
                }
            })
        })
})

Cypress.Commands.add('api_createLabel', (project_id, label) =>{
    cy.api_createIssue(issue.project)
        .then(response => {
            cy.request({
                method: 'POST',
                url: `api/v4/projects/${project_id}/issues?private_token=${accessToken}`,
                body:{
                    name: label.name,
                    color: label.color
                }
            })
        })
})

/* Testando gorest API
   Confirmar como se passa o bearer token no Cypress*/
Cypress.Commands.add('gorestApiRequest', () =>{
    cy.request({
        method: 'GET',
        url: `https://gorest.co.in/public-api/users?private_token=468c52832e956bf51a4ecd27034fcbf9fd2b0048204f2d70ad1b0586bc5f17cb`
    })
})

Cypress.Commands.add('gorestInsert', data =>{
    cy.request({
        method: 'POST',
        url: `https://gorest.co.in/public-api/users?private_token=468c52832e956bf51a4ecd27034fcbf9fd2b0048204f2d70ad1b0586bc5f17cb`,
        body:{
            name: data.name,
            email: data.email,
            gender: data.gender,
            status: data.status            
        }
    })
    
})

Cypress.Commands.add('gorestFind', data =>{
    cy.request({
        method: 'GET',
        url: `https://gorest.co.in/public-api/users/?name=${data.name}`,
    })   
})