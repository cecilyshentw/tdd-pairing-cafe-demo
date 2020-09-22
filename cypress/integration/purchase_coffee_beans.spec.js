describe('Add coffee beans to cart', () => {
    it('displays the item count in the cart', () => {
        cy.visit('http://localhost:3000');

        cy.get('[data-testid="addButton"]')
        .click();

        cy.get('[data-testid="coffeeCount"]')
        .contains(1);
    });
});

describe('Clear shopping cart', () => {
    it('clears item count in the cart', () => {
        cy.visit('http://localhost:3000');

        cy.get('[data-testid="clearButton"]')
        .click();

        cy.get('[data-testid="coffeeCount"]')
        .contains(0);
    });
});
