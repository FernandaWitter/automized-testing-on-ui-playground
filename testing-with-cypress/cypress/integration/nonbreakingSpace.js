describe('Non-Breaking Space ID test', () => {
    const testPageLink = 'Non-Breaking Space'

    it('Click on a button with a non-breaking space in the title', () => {

        // Access test page
        cy.goToTestPage(testPageLink)

        // Validate button is visible and enabled and click it
        cy.get('button').contains('My Button')
            .should('be.visible')
            .and('not.be.disabled')
            .click()

    })
})