describe('ng-ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=layoutconstrainedgridcomponent--primary&args=menus;user;'));
  it('should render the component', () => {
    cy.get('bwl-layout-constrained-grid').should('exist');
  });
});