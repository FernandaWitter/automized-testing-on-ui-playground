// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("goToTestPage", pageTitle => {
    cy.visit('/')
    cy.get('a').contains(pageTitle).click()
})

Cypress.Commands.add("login", (username, password) => {

    cy.get('[name=UserName]').clear().should('have.value', '')
    cy.get('[name=Password]').clear().should('have.value', '')

    if (username != undefined && username != '') {
        cy.get('[name=UserName]').type(username).should('have.value', username)
    }
    if (password != undefined && password != '') {
        cy.get('[name=Password]').type(password).should('have.value', password)
    }
    cy.get('#login').click()

})