
describe('Changing the language of the website', ()=>{

    beforeEach(() => {
        cy.visit('https://elections-dev.maricopa.gov')
      })

    it('Handling new Browser Tab', function () {
        cy.contains('Facebook').invoke('removeAttr', 'target').click()
        // cy.url()
        //     .should('include', 'https://www.facebook.com/MaricopaVote')
    })

    // it('Handling new Browser Tab', function () {
    //     cy.visit('https://the-internet.herokuapp.com/windows')
    //     cy.get('.example > a').invoke('removeAttr', 'target').click()
    //     cy.url()
    //         .should('include', '/windows/new')
    //     cy.get('h3')
    //         .should('have.text', 'New Window')
    // })

  
})

//Do rozwiazania na pozniej

