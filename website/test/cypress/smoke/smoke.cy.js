describe('smoke', () => {
  it('loads the site root', () => {
    cy.visit('/');
    cy.get('body').should('exist');
  });
});
