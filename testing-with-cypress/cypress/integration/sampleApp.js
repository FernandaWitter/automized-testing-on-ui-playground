describe('Sample App test', () => {
    const testPageLink = 'Sample App'

    const username = Cypress.env('username')
    const password = Cypress.env('password')
    const wrongUser = 'user@name'
    const wrongPassword = 'wrongPassword'

    function validateErrMsg() {
        cy.get('.text-danger').should('contain', 'Invalid username/password')
    }

    beforeEach('Access page', () => {

        // Access test page
        cy.goToTestPage(testPageLink)

    })

    it('Validate error message for blank inputs', () => {

        // Validate error for blank username and password
        cy.login()
        validateErrMsg()

        // Fill only username
        cy.login(username)
        validateErrMsg()

        // Clear username and fills password
        cy.login('', password)
        validateErrMsg()

    })

    it('Validate error message for wrong inputs', () => {

        // Wrong username isn't tested because all username
        // values are considered correct
        /*cy.login(wrongUsername, password)
        validateErrMsg()*/

        // Wrong password
        cy.login(username, wrongPassword)
        validateErrMsg()

    })

    it('Validate successful login', () => {

        cy.login(username, password)

        cy.get('.text-success').should('contain', 'Welcome, ' + username + '!')

        cy.get('button').contains('Log Out')
            .should('be.visible')
            .and('be.enabled')
            .click()

        cy.get('.text-info').should('contain', 'User logged out.')
    })

})