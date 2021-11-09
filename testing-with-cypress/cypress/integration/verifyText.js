describe('Verify Text test', () => {
    const testPageLink = 'Verify Text'

    it('Find specific text on screen', () => {

        // Access test page
        cy.goToTestPage(testPageLink)

        // Find text and validate it's visible 
        cy.get('.badge-secondary').contains('Welcome UserName!')
            .should('be.visible')

    })
})