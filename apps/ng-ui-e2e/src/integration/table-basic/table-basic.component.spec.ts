describe('ng-ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=tablebasiccomponent--primary&args=schemas;entities$;showEdit:false;'));
  it('should render the component', () => {
    cy.get('bwl-table-basic').should('exist');
  });
});