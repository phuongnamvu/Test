/// <reference types="cypress" />

describe('template spec', () => {
    it('passes', () => {
      cy.visit('https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onchange')


      // cy.wait(1000)

      // cy.visit('https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onchange')

      // cy.wait(1000)

      // cy.visit('https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onchange')

      
    

    // Open : click one Button : New Tab 
    // cy.get('a').invoke('removeAttr', 'target').click()
    //     cy.window().then(win => {
    //         cy.stub(win, 'open').as('windowOpen')
    //     })
    // cy.get('a').click()
    // cy.get('@windowOpen').should('be.calledWith', 'https://example.com')

    })

  })

//   Exmaple 2 

// /// <reference types="cypress" />

// describe('template spec', () => {
//     it('passes', () => {
//         cy.visit('https://example.com', { 
//             onBeforeLoad(win) {
//               win.open = cy.stub().as('windowOpen')
//             }
//           })
//           cy.get('a').click()
//           cy.get('@windowOpen').should('be.calledWith', 'https://example.com')

//           cy.get('body').tab()

          

//     })

//   })