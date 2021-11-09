describe('Class Attribute test', () => {
    const testPageLink = 'Class Attribute'

    it('Find button by class attribute and click it', () => {

        // Access test page
        cy.goToTestPage(testPageLink)

        // Validate green button exists and is enabled
        cy.get('.btn-success')
            .should('be.visible')
            .and('not.be.disabled')
            .and('contain', 'Button')

        // Validate orange button exists and is enabled
        cy.get('.btn-warning')
            .should('be.visible')
            .and('not.be.disabled')
            .and('contain', 'Button')

        // Validate blue button exists and is enabled, and click it
        cy.get('.btn-primary')
            .should('be.visible')
            .and('not.be.disabled')
            .and('contain', 'Button')
            .click()

        // Validate alert content
        cy.on('window:alert', text => {
            expect(text).to.contain('Primary button pressed')
            expect(text).not.to.contain('Warning button pressed')
            expect(text).not.to.contain('Success button pressed')
        })

    })
})