describe('Text Input test', () => {
    const testPageLink = 'Text Input'
    const originalBtnName = "Button That Should Change it's Name Based on Input Value"
    const newBtnName = 'Button with new name'

    it('Change button name', () => {

        // Access test page
        cy.goToTestPage(testPageLink)

        // Validate original button
        cy.get('.btn-primary')
            .should('be.visible')
            .and('not.be.disabled')
            .and('contain', originalBtnName)

        // Type in new name
        cy.get('#newButtonName')
            .should('be.visible')
            .and('not.be.disabled')
            .type(newBtnName)
            .should('contain.value', newBtnName)

        // Alter button name
        cy.get('.btn-primary').click()

        // Validate change
        cy.get('.btn-primary')
            .should('be.visible')
            .and('be.enabled')
            .and('contain', newBtnName)
            .and('not.contain', originalBtnName)

    })
})