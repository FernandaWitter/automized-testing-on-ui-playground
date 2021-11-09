describe('Progress Bar test', () => {
    const testPageLink = 'Progress Bar'

    // Recursive function to keep checking the value of the progress bar
    // until 75% is reached, then click Stop button
    function checkPct() {
        cy.get('.progress-bar').invoke('text').then(val => {

            var pct = parseInt(val.replace(/\D/g, ""))

            // Without an explicit wait, the test spirals into an infinite loop
            // before the bar even starts moving
            cy.wait(100)

            // If the value is already 75, it becomes 76 by the time the button is clicked
            if (pct >= 74) {
                cy.get('button').contains('Stop').click()
            } else {
                checkPct()
            }
        })
    }

    it('Stop progress bar at 75%', () => {

        // Access test page
        cy.goToTestPage(testPageLink)

        // Click Start button
        cy.get('button').contains('Start')
            .should('be.visible')
            .and('not.be.disabled')
            .click()

        // Validate percentage
        checkPct()

        // Validate reported distance - 0 equals perfect timing
        cy.get('#result').should('contain', 'Result: 0')

    })
})