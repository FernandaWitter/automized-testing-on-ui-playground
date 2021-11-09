describe('Dynamic Table test', () => {
    const testPageLink = 'Dynamic Table'

    it('Validate Chrome CPU usage % in dynamic table', () => {

        // Access test page
        cy.goToTestPage(testPageLink)

        // Identify correct table column
        cy.get('[role="columnheader"]').contains('CPU').invoke('index').then(i => {
            // Find Chrome row and get the value of correct cell
            cy.get('[role="cell"]').contains('Chrome')
                .parents('[role="row"]').find('[role="cell"]').eq(i).invoke('text').then(val => {
                    // Validates displayed information
                    cy.get('.bg-warning').should('contain', "Chrome CPU")
                    cy.get('.bg-warning').should('contain', val)
                })

        })

    })
})