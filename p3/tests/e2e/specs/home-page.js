describe('Home Page', () => {
  it('visits the root url', () => {

      cy.visit('/')
      cy.contains('p', 'Record script readings with anyone in the world!')

      // Confirm we see at least 2 scripts
      cy.get('.featured').its('length').should('be.gte', 2);

      //confirm we see the nav bar
      cy.get('nav ul li a').its('length').should('be.eq', 4);

  })
})