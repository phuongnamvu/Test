

/// <reference types="cypress"/>
describe('Handling Tabs', function(){
    it('Testing Tabs', function(){
        cy.visit('https://www.google.com/gmail/about/')
            // cy.get('.footer-links :nth-child(2) > :nth-child(4) > .link').click()
            cy.get('.footer__links > :nth-child(2) > :nth-child(4) > .link').click()
    })
})