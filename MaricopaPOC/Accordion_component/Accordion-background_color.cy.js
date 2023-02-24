///<reference types="cypress-iframe" />

describe('Creating a new Accordion component with a blue background color and white header style, veryfing the background color of created component and deleting it after test', () => {

    beforeEach(() => {

        cy.visit('https://wa-scus-dev-electionauthor.azurewebsites.net/.magnolia/admincentral#app:pages-app:detail;/elections/test/QA-Cypress_automation/Accordion-Elections-default-page:edit', { failOnStatusCode: false }, {retryOnStatusCodeFailure : true});
    
        cy.get("#username").type('astefaniak')
    
        cy.get("#password").type('%86640GbrtoN')
    
        cy.get('button').click()
    
    })

    it('Creating new Accordion component with blue background', () => {
        
        cy.wait(5000)

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
            .contains('Accordion')
            .click({ force: true })

        cy.wait(600)

        cy.get('.v-button-commit .v-button-caption').click()

        cy.contains('Title ')
        .parents('tr')
        .find('input')
        .type('Test Title')

        cy.contains('Background Colour')
        .parents('tr')
        .find('input')
        .click()

        cy.get('#VAADIN_COMBOBOX_OPTIONLIST')
        .contains('Blue')
        .click({ force: true })

        cy.contains('Header Style')
        .parents('tr')
        .find('input')
        .click()

        cy.get('#VAADIN_COMBOBOX_OPTIONLIST')
        .contains('White')
        .click({ force: true })

        cy.get('.v-button-add-multi-form-entry-button').click()

        cy.contains('Header name')
        .parents('div.v-slot-form-field-layout')
        .find('input')
        .type('Test Header name')

        cy.wait(2000)

        cy.get('iframe').then(iframe => {
            cy.wrap(iframe.contents()).within(() => {

                cy.get(".cke_contents_ltr.cke_editable").type('Test Content text')

            })
        })

        cy.get(".v-button-primary-button .v-button-caption").click()

    })

    it('Veryfing background and header style color', () => {
        
        cy.wait(5000)

        cy.get('iframe').then(iframe => {
            cy.wrap(iframe.contents()).within(() => {

                //Verifying background color
                cy.get("main#main-content > .bg-blue.py-5").should('have.css', 'Background', 'rgb(43, 103, 127)')

                //Verifying header style color
                cy.get(".card-header").should('have.css', 'Background', 'rgb(255, 255, 255)')

                //Verifying font color
                cy.get(".btn.btn-collapse.btn-link").should('have.css', 'color', 'rgb(43, 103, 127)')

                cy.wait(6000)

            })
        })
        
    })

    it('Deleting previous created component', () => {

        //Handling switching into the iframe
        cy.wait(5000)

        cy.get('iframe').then(iframe => {
            cy.wrap(iframe.contents()).within(() => {

                cy.wait(500)

                cy.get("main#main-content > .bg-blue.py-5").click({ force: true });

                cy.wait(500)

            })
        })

        cy.get("[aria-labelledby='gwt-uid-35'] .icon-delete.v-icon").click({ force: true })

        cy.get('.v-button-confirm').click()

    })

})

describe('Creating a new Accordion component with a blue background color and blue header style, veryfing the background color of created component and deleting it after test', () => {

    beforeEach(() => {

        cy.visit('https://wa-scus-dev-electionauthor.azurewebsites.net/.magnolia/admincentral#app:pages-app:detail;/elections/test/QA-Cypress_automation/Accordion-Elections-default-page:edit', { failOnStatusCode: false }, {retryOnStatusCodeFailure : true});
    
        cy.get("#username").type('astefaniak')
    
        cy.get("#password").type('%86640GbrtoN')
    
        cy.get('button').click()
    
    })

    it('Creating new Accordion component with blue background', () => {
        
        cy.wait(5000)

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
            .contains('Accordion')
            .click({ force: true })

        cy.wait(600)

        cy.get('.v-button-commit .v-button-caption').click()

        cy.contains('Title ')
        .parents('tr')
        .find('input')
        .type('Test Title')

        cy.contains('Background Colour')
        .parents('tr')
        .find('input')
        .click()

        cy.get('#VAADIN_COMBOBOX_OPTIONLIST')
        .contains('Blue')
        .click({ force: true })

        cy.contains('Header Style')
        .parents('tr')
        .find('input')
        .click()

        cy.get('#VAADIN_COMBOBOX_OPTIONLIST')
        .contains('Blue')
        .click({ force: true })

        cy.get('.v-button-add-multi-form-entry-button').click()

        cy.contains('Header name')
        .parents('div.v-slot-form-field-layout')
        .find('input')
        .type('Test Header name')

        cy.wait(2000)

        cy.get('iframe').then(iframe => {
            cy.wrap(iframe.contents()).within(() => {

                cy.get(".cke_contents_ltr.cke_editable").type('Test Content text')

            })
        })

        cy.get(".v-button-primary-button .v-button-caption").click()

    })

    it('Veryfing background and header style color', () => {
        
        cy.wait(5000)

        cy.get('iframe').then(iframe => {
            cy.wrap(iframe.contents()).within(() => {

                //Verifying background color
                cy.get("main#main-content > .bg-blue.py-5").should('have.css', 'Background', 'rgb(43, 103, 127)')

                ////Verifying header stylecolor
                cy.get(".card-header").should('have.css', 'Background', 'rgb(43, 103, 127)')

                //Verifying font color
                cy.get(".btn.btn-collapse.btn-link").should('have.css', 'color', 'rgb(255, 255, 255)')

                cy.wait(6000)

            })
        })
        
    })

    it('Deleting previous created component', () => {

        //Handling switching into the iframe
        cy.wait(5000)

        cy.get('iframe').then(iframe => {
            cy.wrap(iframe.contents()).within(() => {

                cy.wait(500)

                cy.get("main#main-content > .bg-blue.py-5").click({ force: true });

                cy.wait(500)

            })
        })

        cy.get("[aria-labelledby='gwt-uid-35'] .icon-delete.v-icon").click({ force: true })

        cy.get('.v-button-confirm').click()

    })

})

describe('Creating a new Accordion component with a blue background color and marron header style, veryfing the background color of created component and deleting it after test', () => {

    beforeEach(() => {

        cy.visit('https://wa-scus-dev-electionauthor.azurewebsites.net/.magnolia/admincentral#app:pages-app:detail;/elections/test/QA-Cypress_automation/Accordion-Elections-default-page:edit', { failOnStatusCode: false }, {retryOnStatusCodeFailure : true});
    
        cy.get("#username").type('astefaniak')
    
        cy.get("#password").type('%86640GbrtoN')
    
        cy.get('button').click()
    
    })

    it('Creating new Accordion component with blue background', () => {
        
        cy.wait(5000)

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
            .contains('Accordion')
            .click({ force: true })

        cy.wait(600)

        cy.get('.v-button-commit .v-button-caption').click()

        cy.contains('Title ')
        .parents('tr')
        .find('input')
        .type('Test Title')

        cy.contains('Background Colour')
        .parents('tr')
        .find('input')
        .click()

        cy.get('#VAADIN_COMBOBOX_OPTIONLIST')
        .contains('Blue')
        .click({ force: true })

        cy.contains('Header Style')
        .parents('tr')
        .find('input')
        .click()

        cy.get('#VAADIN_COMBOBOX_OPTIONLIST')
        .contains('Marron')
        .click({ force: true })

        cy.get('.v-button-add-multi-form-entry-button').click()

        cy.contains('Header name')
        .parents('div.v-slot-form-field-layout')
        .find('input')
        .type('Test Header name')

        cy.wait(2000)

        cy.get('iframe').then(iframe => {
            cy.wrap(iframe.contents()).within(() => {

                cy.get(".cke_contents_ltr.cke_editable").type('Test Content text')

            })
        })

        cy.get(".v-button-primary-button .v-button-caption").click()

    })

    it('Veryfing background and header style color', () => {
        
        cy.wait(5000)

        cy.get('iframe').then(iframe => {
            cy.wrap(iframe.contents()).within(() => {

                ////Verifying background color
                cy.get("main#main-content > .bg-blue.py-5").should('have.css', 'Background', 'rgb(43, 103, 127)')

                //Verifying header style color
                cy.get(".card-header").should('have.css', 'Background', 'rgb(169, 72, 58)')

                //Verifying font color
                cy.get(".btn.btn-collapse.btn-link").should('have.css', 'color', 'rgb(255, 255, 255)')

                cy.wait(6000)

            })
        })
        
    })

    it('Deleting previous created component', () => {

        //Handling switching into the iframe
        cy.wait(5000)

        cy.get('iframe').then(iframe => {
            cy.wrap(iframe.contents()).within(() => {

                cy.wait(500)

                cy.get("main#main-content > .bg-blue.py-5").click({ force: true });

                cy.wait(500)

            })
        })

        cy.get("[aria-labelledby='gwt-uid-35'] .icon-delete.v-icon").click({ force: true })

        cy.get('.v-button-confirm').click()

    })

})

describe('Creating a new Accordion component with a blue background color and marron light header style, veryfing the background color of created component and deleting it after test', () => {

    beforeEach(() => {

        cy.visit('https://wa-scus-dev-electionauthor.azurewebsites.net/.magnolia/admincentral#app:pages-app:detail;/elections/test/QA-Cypress_automation/Accordion-Elections-default-page:edit', { failOnStatusCode: false }, {retryOnStatusCodeFailure : true});
    
        cy.get("#username").type('astefaniak')
    
        cy.get("#password").type('%86640GbrtoN')
    
        cy.get('button').click()
    
    })

    it('Creating new Accordion component with blue background', () => {
        
        cy.wait(5000)

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
            .contains('Accordion')
            .click({ force: true })

        cy.wait(600)

        cy.get('.v-button-commit .v-button-caption').click()

        cy.contains('Title ')
        .parents('tr')
        .find('input')
        .type('Test Title')

        cy.contains('Background Colour')
        .parents('tr')
        .find('input')
        .click()

        cy.get('#VAADIN_COMBOBOX_OPTIONLIST')
        .contains('Blue')
        .click({ force: true })

        cy.contains('Header Style')
        .parents('tr')
        .find('input')
        .click()

        cy.get('#VAADIN_COMBOBOX_OPTIONLIST')
        .contains('Marron Light')
        .click({ force: true })

        cy.get('.v-button-add-multi-form-entry-button').click()

        cy.contains('Header name')
        .parents('div.v-slot-form-field-layout')
        .find('input')
        .type('Test Header name')

        cy.wait(2000)

        cy.get('iframe').then(iframe => {
            cy.wrap(iframe.contents()).within(() => {

                cy.get(".cke_contents_ltr.cke_editable").type('Test Content text')

            })
        })

        cy.get(".v-button-primary-button .v-button-caption").click()

    })

    it('Veryfing background and header style color', () => {
        
        cy.wait(5000)

        cy.get('iframe').then(iframe => {
            cy.wrap(iframe.contents()).within(() => {

                //Verifying background color
                cy.get("main#main-content > .bg-blue.py-5").should('have.css', 'Background', 'rgb(43, 103, 127)')

                //Verifying header style color
                cy.get(".card-header").should('have.css', 'Background', 'rgb(255, 255, 255)')

                //Verifying font color
                cy.get(".btn.btn-collapse.btn-link").should('have.css', 'color', 'rgb(169, 72, 58)')

                cy.wait(6000)

            })
        })
        
    })

    it('Deleting previous created component', () => {

        //Handling switching into the iframe
        cy.wait(5000)

        cy.get('iframe').then(iframe => {
            cy.wrap(iframe.contents()).within(() => {

                cy.wait(500)

                cy.get("main#main-content > .bg-blue.py-5").click({ force: true });

                cy.wait(500)

            })
        })

        cy.get("[aria-labelledby='gwt-uid-35'] .icon-delete.v-icon").click({ force: true })

        cy.get('.v-button-confirm').click()

    })

})
