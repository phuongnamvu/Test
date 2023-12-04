
//  Link này làm : Chỉ nhảy ra có 1 Tab - Hay thiệt 
// https://www.youtube.com/watch?v=ParPCnpcj9g



/// <reference types="cypress"/>
describe('Handling Tabs', function(){
    it('Testing Tabs', function(){
        cy.visit('https://the-internet.herokuapp.com/')
            // cy.get('.footer-links :nth-child(2) > :nth-child(4) > .link').click()
            cy.get(':nth-child(1) > a').click()
    })
})

