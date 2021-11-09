describe('Mouse Over test', () => {
    const testPageLink = 'Mouse Over'
    const mouseLink = 'a[title="Click me"]'
    const counter = '#clickCount'

    it('Click on a link that changes on mouse over', () => {

        // Access test page
        cy.goToTestPage(testPageLink)

        // Validate counter starts at 0
        cy.get(counter).should('contain', 0)

        // Click link twice
        cy.get(mouseLink).dblclick()

        // Validate counter displays 2
        cy.get(counter).should('contain', 2)

    })
})