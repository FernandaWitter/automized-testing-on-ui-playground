describe('Scrollbars test', () => {
    const testPageLink = 'Scrollbars'

    it('Scroll to find hidden button', () => {

        // Access test page
        cy.goToTestPage(testPageLink)

        // Scroll button into visible area and click it
        cy.get('button').contains('Hiding Button')
            .scrollIntoView()
            .should('be.visible')
            .and('not.be.disabled')
            .click()

    })
})