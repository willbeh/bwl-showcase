describe('ng-ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=headercomponent--primary'));
  it('should render the component', () => {
    cy.get('bwl-header').should('exist');
  });
});