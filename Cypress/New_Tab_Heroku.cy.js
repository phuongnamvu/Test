//  Link này làm : Chỉ nhảy ra có 1 Tab - Hay thiệt 
// https://www.youtube.com/watch?v=ParPCnpcj9g

/// <reference types="cypress" />

describe('template spec', () => {
    it('passes', () => {
      

      // cy.get(':nth-child(1) > a').click()

      // cy.go('back')

    //   cy.get('ul > :nth-child(2) > a')
    //   cy.visit('https://the-internet.herokuapp.com/').then(() => {
    //   cy.window().its('open').invoke('https://the-internet.herokuapp.com/add_remove_elements/')
    // })
      // // cy.go('forward')
      


      // cy.get(':nth-child(1) > a').click()
      // cy.visit('https://www.example.com').then(() => {
      //   cy.window().its('open').invoke('https://the-internet.herokuapp.com/abtest')

      //   })  

      cy.visit('https://the-internet.herokuapp.com/') 
        cy.get(':nth-child(1) > a').click()

        // Cái này : Củng Đúng - Hoặc Open Web trước - Click sau ( Hoặc Click Bỏ Vô trong Then )
      cy.visit('https://the-internet.herokuapp.com/').then(() => {
        // cy.get(':nth-child(1) > a').click()
        cy.window().its('open').invoke('https://the-internet.herokuapp.com/abtest')

        })  




    })

    // Hàm cy.window() : Nó chỉ mở ra 1 tab cho mình 

  })

