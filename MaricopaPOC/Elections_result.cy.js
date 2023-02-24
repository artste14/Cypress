/// <reference types="cypress" />

const { equal } = require("assert")

describe('Changing the language of the website', () => {

    let inputName = 'VICTOR'

    beforeEach(() => {
        cy.visit('https://elections-dev.maricopa.gov/results-and-data/election-results.html')

    })

    it('Checking that tabs are switching and being highlighted correctly', () => {

        //Switch to tab number two
        cy.get('#tab-panel-1')
            .click()

        //Verifying that the selected tab is active    
        cy.get('#tab-panel-1')
            .should('have.class', 'active')

        ////Switch to tab number three    
        cy.get('#tab-panel-2')
            .click()

        //Verifying that the selected tab is active    
        cy.get('#tab-panel-2')
            .should('have.class', 'active')

        ////Switch to tab number four    
        cy.get('#tab-panel-3')
            .click()

        //Verifying that the selected tab is active    
        cy.get('#tab-panel-3')
            .should('have.class', 'active')

        ////Switch to tab number five
        cy.get('#tab-panel-4')
            .click()

        //Verifying that the selected tab is active    
        cy.get('#tab-panel-4')
            .should('have.class', 'active')

        ////Switch to tab number six    
        cy.get('#tab-panel-5')
            .click()

        //Verifying that the selected tab is active    
        cy.get('#tab-panel-5')
            .should('have.class', 'active')

        ////Switch to tab number one    
        cy.get('#tab-panel-0')
            .click()

        //Verifying that the selected tab is active    
        cy.get('#tab-panel-0')
            .should('have.class', 'active')

    })

    it('Checking if search engine works correctly', () => {

        //Entering String with the candidate's name in the search engine
        cy.get("[data-index='0'] [type='text']")
            .type(inputName).should('have.value', inputName)
        cy.get("[data-index='0'] [type='submit']").click()

        //Checking if the element appearing in the search results is consistent with the search engine's query
        cy.get("#tab-0 .election-result-card__body")
            .contains(inputName)

    })

    it('Checking if CLEAR button works correctly', () => {

        //Typing in search engine String inputName
        cy.get("[data-index='0'] [type='text']")
            .type(inputName).should('have.value', inputName)

        //Clicking on RESET button    
        cy.get("[data-index='0'] [type='reset']").click()

        //Verifying that search engine field is empty
        cy.get("[data-index='0'] [type='text']")
            .should('have.value', '');

    })

    it('Adding and then removing a card from favorites', () => {

        //Adding an item to the "Favorites" tab by pressing the star icon next to the item
        cy.get("#pills-tabContent [role='tabpanel']:nth-of-type(1) .election-card:nth-child(4) [aria-hidden]").click()

        //Verifying that an item added to the "Favorites" tab is actually there
        cy.get("#pills-tabContent [role='tabpanel']:nth-of-type(1) .election-card:nth-child(4) [class='mb-1']").then(($value) => {
            let getText = $value.text()

            cy.get("li:nth-of-type(5) > a[role='tab']").click()

            cy.get("#pills-tabContent [role='tabpanel']:nth-of-type(5) [class='mb-1']").invoke('text')
            .should('eql',getText)
        })

        //Removing the added bookmark from "Favorites"
        cy.get("#pills-tabContent [role='tabpanel']:nth-of-type(5) [aria-hidden]").click()

        //Verifying that the "Favorites" tab is empty and the corresponding message is displayed
        cy.get("#pills-tabContent .constrain:nth-of-type(1) > p:nth-child(2)").should('contain',"You haven't selected any contest yet to display in your")

    })



})


