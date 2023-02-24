///<reference types="cypress-iframe" />

describe('Creating a new Banner component with a red background color', () => {

    beforeEach(() => {

        cy.visit('https://wa-scus-dev-electionauthor.azurewebsites.net/.magnolia/admincentral#app:pages-app:detail;/elections/test/QA-Cypress_automation/Banner-Elections-default-page:edit', { failOnStatusCode: false }, {retryOnStatusCodeFailure : true});
    
        cy.get("#username").type('astefaniak')
    
        cy.get("#password").type('%86640GbrtoN')
    
        cy.get('button').click()
    
    })

    it('Verification that the "Color overlay" field is required', () => {
        
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

        cy.get('.v-button-primary-button').click()

        cy.wait(1000)

        cy.get('.v-label-validation-display')
        .should('contain.text','This field is required.')
    })

    it('Verification that the "Summary" field is required', () => {
        
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

        cy.get('.v-filterselect-hide-caption [autocomplete]').click()

        cy.get('#VAADIN_COMBOBOX_OPTIONLIST')
            .contains('Red')
            .click({ force: true })

        cy.wait(2000)    

        cy.get('.v-button-primary-button .v-button-caption').click()

        cy.wait(1000)

        cy.get('.v-label-validation-display')
        .should('contain.text','This field is required.')
    })

    it('Verification that the "Title" field is required', () => {
        
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

        cy.get(".hide-caption.v-has-width.v-textarea.v-textarea-hide-caption.v-widget").type('Banner test summary')

        cy.get('.v-filterselect-hide-caption [autocomplete]').click()

        cy.get('#VAADIN_COMBOBOX_OPTIONLIST')
            .contains('Red')
            .click({ force: true })

        cy.wait(2000)    

        cy.get('.v-button-primary-button .v-button-caption').click()

        cy.wait(1000)

        cy.get('.v-label-validation-display')
        .should('contain.text','This field is required.')
    })


})

