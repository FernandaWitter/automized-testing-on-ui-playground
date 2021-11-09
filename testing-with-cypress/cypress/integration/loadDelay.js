describe('Load Delay test', () => {
    const testPageLink = 'Load Delay'

    it('Wait for a loading page', () => {

        // Access test page
        cy.goToTestPage(testPageLink)

        // Newer versions of Cypress natively wait for pages to load before proceeding
        // allowing the test to include only the required actions

        cy.get('button').contains('Button Appearing After Delay')
            .should('be.visible')
            .and('be.enabled')
            .click()

    })
})