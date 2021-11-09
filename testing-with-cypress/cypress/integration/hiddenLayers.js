describe('Hidden Layers test', () => {
    const testPageLink = 'Hidden Layers'
    const errorMsg = 'User can not click green button in the current application state!'

    it('Click on success button that becomes primary button', () => {

        // Access test page
        cy.goToTestPage(testPageLink)

        // Validate blue button doesn't exist
        cy.get('.btn-primary')
            .should('not.exist')

        // Validate green button exists and is enabled
        cy.get('.btn-success')
            .and('be.visible')
            .and('not.be.disabled')
            .and('contain', 'Button')
            .click()

        // Green button is covered and throws error on click
        cy.get('.btn-success')
            .click({ force: true })

        // Handle expected error thrown
        cy.once('fail', err => {
            expect(err).to.include('cy.click() failed')
            expect(err).to.include('this element is being covered by another element')
        })

        // Validate error message is shown because click was forced by code
        cy.get('.bg-warning').should('contain', errorMsg)

        // Validate green button exists and is enabled
        cy.get('.btn-primary')
            .and('be.visible')
            .and('not.be.disabled')
            .and('contain', 'Button')

    })
})