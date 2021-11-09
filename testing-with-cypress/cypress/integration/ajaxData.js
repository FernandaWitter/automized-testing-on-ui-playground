describe('AJAX Data test', () => {
    const testPageLink = 'AJAX Data'
    const successMsg = 'Data loaded with AJAX get request.'

    it('Wait for AJAX response', () => {

        // Map the AJAX request url
        cy.intercept('/ajaxdata').as('ajaxData')

        // Access test page
        cy.goToTestPage(testPageLink)

        // Click button to trigger AJAX request
        cy.get('button').contains('Button Triggering AJAX Request')
            .should('be.visible')
            .and('not.be.disabled')
            .click()

        // Wait for response. However long it takes, as soon as it's detected, the test continues
        cy.wait('@ajaxData')

        // Validate success message
        cy.get('.bg-success')
            .should('contain', successMsg)

    })
})