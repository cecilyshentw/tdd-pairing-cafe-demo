describe('Purchase coffee beans', () => {
    it('Displays the success message', () => {
        cy.visit('http://localhost:3000');

        cy.get('[data-testid="purchaseButton"]')
        .click();

        cy.get('[data-testid="purchaseButton"]')
        .contains('Purchased');
        
        cy.contains('You have purchased the best coffee beans in the world!');
    });
  });
