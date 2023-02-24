///<reference types="cypress-iframe" />

describe('Creating a new Banner component with a red background color', () => {

    beforeEach(() => {

        cy.visit('https://wa-scus-dev-electionauthor.azurewebsites.net/.magnolia/admincentral#app:pages-app:detail;/elections/test/QA-Cypress_automation/Banner-Elections-default-page:edit', { failOnStatusCode: false }, {retryOnStatusCodeFailure : true});
    
        cy.get("#username").type('astefaniak')
    
        cy.get("#password").type('%86640GbrtoN')
    
        cy.get('button').click()
    
    })

    it('Creating new Banner component with red background color', () => {

        cy.wait(4000)

        //Handling switching into the iframe
        cy.get('iframe').then(iframe => {
            cy.wrap(iframe.contents()).within(() => {

                cy.wait(500)

                cy.get("main#main-content > .area.end.init.mgnlEditor.mgnlEditorBar").click({ force: true });

                cy.wait(500)

                cy.get('.mgnlEditor.mgnlPlaceholder .mgnlEditorBar.mgnlEditor.component').click({ force: true })


            })
        })

        cy.get('.v-filterselect-hide-caption [autocomplete]').click({ force: true })

        cy.wait(600)

        cy.get('#VAADIN_COMBOBOX_OPTIONLIST')
            .contains('Banner')
            .click({ force: true })

        cy.wait(600)

        cy.get('.v-button-commit .v-button-caption').click()

        cy.get(".form-field-layout.v-customcomponent.v-customcomponent-form-field-layout.v-customcomponent-required.v-has-width.v-required.v-widget .hide-caption.v-has-width.v-textfield.v-textfield-hide-caption.v-widget").type('Banner test title')

        cy.get(".hide-caption.v-has-width.v-textarea.v-textarea-hide-caption.v-widget").type('Banner test summary')

        cy.get('.v-filterselect-hide-caption [autocomplete]').click()

        cy.get('#VAADIN_COMBOBOX_OPTIONLIST')
            .contains('Red')
            .click({ force: true })

        cy.wait(2000)    

        cy.get('.v-button-primary-button .v-button-caption').click()


    })


    it('Veryfing background colour', () => {

        //Handling switching into the iframe
        cy.wait(5000)

        cy.get('iframe').then(iframe => {
            cy.wrap(iframe.contents()).within(() => {

                cy.wait(500)

                cy.get('.background-overlay.overlay-red').should('be.visible')

                cy.get('.overlay-red').should('have.css', 'Background', 'rgb(169, 72, 58)')

                cy.wait(500)

            })
        })

    })


    it('Deleting previous created component', () => {

        //Handling switching into the iframe
        cy.wait(5000)

        cy.get('iframe').then(iframe => {
            cy.wrap(iframe.contents()).within(() => {

                cy.wait(500)

                cy.get(".background-overlay.overlay-red").click({ force: true });

                cy.wait(500)

            })
        })

        cy.get("[aria-labelledby='gwt-uid-35'] .icon-delete.v-icon").click({ force: true })

        cy.get('.v-button-confirm').click()

    })


})


describe('Creating a new Banner component with a blue background color', () => {

    beforeEach(() => {
    
        cy.visit('https://wa-scus-dev-electionauthor.azurewebsites.net/.magnolia/admincentral#app:pages-app:detail;/elections/test/QA-Cypress_automation/Banner-Elections-default-page:edit', { failOnStatusCode: false }, {retryOnStatusCodeFailure : true});

        cy.get("#username").type('astefaniak')
    
        cy.get("#password").type('%86640GbrtoN')
    
        cy.get('button').click()
    
    })

    it('Creating new Banner component with blue background color', () => {

        cy.wait(4000)

        //Handling switching into the iframe
        cy.get('iframe').then(iframe => {
            cy.wrap(iframe.contents()).within(() => {

                cy.wait(500)

                cy.get("main#main-content > .area.end.init.mgnlEditor.mgnlEditorBar").click({ force: true });

                cy.wait(500)

                cy.get('.mgnlEditor.mgnlPlaceholder .mgnlEditorBar.mgnlEditor.component').click({ force: true })


            })
        })

        cy.get('.v-filterselect-hide-caption [autocomplete]').click({ force: true })

        cy.wait(600)

        cy.get('#VAADIN_COMBOBOX_OPTIONLIST')
            .contains('Banner')
            .click({ force: true })

        cy.wait(600)

        cy.get('.v-button-commit .v-button-caption').click()

        cy.get(".form-field-layout.v-customcomponent.v-customcomponent-form-field-layout.v-customcomponent-required.v-has-width.v-required.v-widget .hide-caption.v-has-width.v-textfield.v-textfield-hide-caption.v-widget").type('Banner test title')

        cy.get(".hide-caption.v-has-width.v-textarea.v-textarea-hide-caption.v-widget").type('Banner test summary')

        cy.get('.v-filterselect-hide-caption [autocomplete]').click()

        cy.get('#VAADIN_COMBOBOX_OPTIONLIST')
            .contains('Blue')
            .click({ force: true })

        cy.wait(2000)

        cy.get('.v-button-primary-button .v-button-caption').should('be.visible').click()


    })


    it('Veryfing background colour', () => {

        //Handling switching into the iframe
        cy.wait(5000)

        cy.get('iframe').then(iframe => {
            cy.wrap(iframe.contents()).within(() => {

                cy.wait(500)

                cy.get('.background-overlay.overlay-blue').should('have.css', 'Background', 'rgb(43, 103, 127)')

                cy.wait(500)

            })
        })

    })


    it('Deleting previous created component', () => {

        //Handling switching into the iframe
        cy.wait(5000)

        cy.get('iframe').then(iframe => {
            cy.wrap(iframe.contents()).within(() => {

                cy.wait(500)

                cy.get(".background-overlay.overlay-blue").click({ force: true });

                cy.wait(500)

            })
        })

        cy.get("[aria-labelledby='gwt-uid-35'] .icon-delete.v-icon").click({ force: true })

        cy.get('.v-button-confirm').click()

    })


})

