describe('Click test', () => {
    const testPageLink = 'Click'
    const buttonText = 'Button That Ignores DOM Click Event'

    it('Click on a button that ignores event based clicks', () => {

        // Access test page
        cy.goToTestPage(testPageLink)

        // Validate button is visible and enabled and click it
        cy.get('button').contains(buttonText)
            .should('be.visible')
            .and('not.be.disabled')
            .click()

        // Validates that blue button no longer exists
        cy.get('.btn-primary')
            .should('not.exist')

        // Validates that blue button is now shown
        cy.get('.btn-success')
            .should('be.visible')
            .and('not.be.disabled')
            .and('contain', buttonText)

    })
})