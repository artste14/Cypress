
describe('Changing the language of the website', ()=>{

    let selectedYear1 = '2008'
    let selectedYear2 = '2009'

    beforeEach(() => {
        cy.visit('https://elections-dev.maricopa.gov/results-and-data/historic-results.html')
      })

    it('Checking if the documents from the year selected from the dropdown menu list are displayed correctly (also after changing to another year)', () => {

        //Selecting selectedYear1 from the year list
        cy.get("select#electionYear").select(selectedYear1)

        //Verification that the items visible on the list match the previously selected year
        cy.get('tr:nth-of-type(1) > td:nth-of-type(2)').should('contain',selectedYear1)

        //Selecting from dropdown menu list another year (selectedYear2) to check if after the change the correct items will be displayed
        cy.get("select#electionYear").select(selectedYear2)

        //Verification that the items visible on the list match the previously changed year
        cy.get('tr:nth-of-type(1) > td:nth-of-type(2)').should('contain',selectedYear2)

    })


 
})


