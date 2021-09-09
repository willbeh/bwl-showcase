describe('ng-ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=buttonprimarycomponent--primary'));
  it('should render the component', () => {
    cy.get('bwl-button-primary').should('exist');
  });
});