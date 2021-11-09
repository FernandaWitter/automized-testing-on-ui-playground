describe('Client Side Delay test', () => {
    const testPageLink = 'Client Side Delay'
    const successMsg = 'Data calculated on the client side.'

    it('Wait for JS processing', () => {

        // Access test page
        cy.goToTestPage(testPageLink)

        // Validate button is visible and enabled and click it
        cy.get('button').contains('Button Triggering Client Side Logic')
            .should('be.visible')
            .and('not.be.disabled')
            .click()

        // Validate success message, waiting up to 15 seconds for it to show
        cy.get('.bg-success', { timeout: 15000 }).should('contain', successMsg)

    })
})