describe('Dynamic ID test', () => {
    const testPageLink = 'Dynamic ID'

    it('Click on a button with a dynamic ID', () => {

        // Access test page
        cy.goToTestPage(testPageLink)

        // Validate button is visible and enabled and click it
        cy.get('button').contains('Button with Dynamic ID')
            .should('be.visible')
            .and('not.be.disabled')
            .click()

    })
})