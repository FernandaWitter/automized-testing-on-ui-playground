describe('Visibility test', () => {
    const testPageLink = 'Visibility'
    const hiddenBtns = ['Removed', 'Zero Width', 'Overlapped', 'Opacity 0',
        'Visibility Hidden', 'Display None', 'Offscreen'
    ]

    it('Correctly validate not visible elements', () => {

        // Access test page
        cy.goToTestPage(testPageLink)

        // Validate Hide button is visible and enabled
        cy.get('button').contains('Hide')
            .should('be.visible')
            .and('not.be.disabled')

        // Validate all other buttons are visible
        hiddenBtns.forEach(button => {
            cy.get('button').contains(button)
                .should('be.visible')
        })

        // Click Hide button
        cy.get('button').contains('Hide').click()

        // Validate all other buttons are no longer visible
        hiddenBtns.forEach(button => {

            // Overlapped and Offscreen buttons are still "visible" and exist in the DOM
            // so 
            if (button != 'Removed') {
                cy.get('button').contains(button).eq(0).click({ force: true })
                cy.once('fail', err => {
                    expect(err).to.include('cy.click() failed')
                })
            } else {
                cy.get('button').contains(button)
                    .should('not.exist')
            }
        })

    })
})