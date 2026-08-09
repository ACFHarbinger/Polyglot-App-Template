describe('navigation', () => {
  it('has a document title after visit', () => {
    cy.visit('/');
    cy.title().should('be.a', 'string');
  });
});
