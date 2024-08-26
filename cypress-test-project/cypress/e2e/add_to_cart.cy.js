
describe('E2E Test for Adding a Product to Cart', () => {
    it('Should add a product to the cart successfully', () => {
        // Visit the homepage
        cy.visit('https://www.demoblaze.com');

        // Select a product 
        cy.contains('Samsung galaxy s6').click();

        // Add the product to the cart
        cy.get('.btn-success').contains('Add to cart').click();

        // Handle the alert that appears after adding to cart
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal('Product added');
        });

        // Close the alert
        cy.on('window:confirm', () => true);

        // Go to the cart to verify the product is added
        cy.get('#cartur').click();

        // Verify the product is in the cart
        cy.get('tr.success').should('contain.text', 'Samsung galaxy s6');
    });
});