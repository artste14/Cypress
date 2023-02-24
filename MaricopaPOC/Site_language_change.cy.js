
describe('Changing the language of the website', ()=>{

    beforeEach(() => {
        cy.visit('https://elections-dev.maricopa.gov')
      })

    it('Changing language from English to Español and then from Español to English', () => {
        
        //Changing the site's language to Spanish
        cy.get('.language-toggle')
        .contains('Español')
        .click()

        //Verifying if Spanish language is currently selected
        cy.get('.language-toggle')
        .contains('Español')
        .should('have.class','on')

        //Verifying if English language is currently unselected
        cy.get('.language-toggle')
        .contains('English')
        .should('not.have.class','on')

        //Changing the site's language to English
        cy.get('.language-toggle')
        .contains('English')
        .click()

        //Verifying if English language is currently selected
        cy.get('.language-toggle')
        .contains('English')
        .should('have.class','on')

        //Verifying if Spanish language is currently unselected
        cy.get('.language-toggle')
        .contains('Español')
        .should('not.have.class','on')

    })

    it('Checking that the header on the home page is written in the right language', () => {
        
        //Checking the content of the header in English (language set by default after entering the site)
        cy.get('.hero-elements h1')
        .should('contain.text','Maricopa County Elections Department')

        //Changing the site's language to Spanish
        cy.get('.language-toggle')
        .contains('Español')
        .click()

        //Checking the content of the header in Spanish
        cy.get('.hero-elements h1')
        .should('contain.text','Departamento de Elecciones del Condado Maricopa')
    })
 
})


