describe('Demoblaze Checkout Flow', () => {
    it('should complete the checkout process successfully', () => {
      // Visit the homepage
      cy.visit('https://www.demoblaze.com');
  
      // Select a product (e.g., the first product listed)
      cy.get('.card.h-100').first().within(() => {
        cy.get('.hrefch').click();
      });
  
      // Add the product to the cart
      cy.get('.btn-success').contains('Add to cart').click();
  
      // Handle the alert confirmation
      cy.on('window:alert', (alertText) => {
        expect(alertText).to.equal('Product added');
    });
  
      // Wait for a short duration to ensure the alert is handled
      cy.wait(1000);
  
      // Navigate to the cart
      cy.get('#cartur').click();
  
      // Verify the cart contains the selected product
      cy.url().should('include', 'cart.html');
      cy.get('tbody > tr').should('have.length', 1);
      cy.get('tbody > tr').within(() => {
        cy.get('td').eq(1).should('not.be.empty'); // Product title
        cy.get('td').eq(2).should('not.be.empty'); // Price
      });
  
      // Click on 'Place Order'
      cy.get('.btn-success').contains('Place Order').click();
  
      // Fill out the order form
      cy.get('#orderModal').within(() => {
        cy.get('#name').type('Edgaras');
        cy.get('#country').type('Lithuania');
        cy.get('#city').type('Vilnius');
        cy.get('#card').type('1234567890');
        cy.get('#month').type('October');
        cy.get('#year').type('2024');
  
        // Submit the order
        cy.get('.btn-primary').contains('Purchase').click();
      });
  
      // Verify the purchase confirmation
      cy.get('.sweet-alert').should('be.visible');
      cy.get('.sweet-alert > h2').should('have.text', 'Thank you for your purchase!');
  
      // Verify the confirmation details
      cy.get('.sweet-alert > p').then((text) => {
        const confirmationText = text.text();
        expect(confirmationText).to.match(/Id:\s*\d+/);
        expect(confirmationText).to.match(/Amount:\s*\d+ USD/);
        expect(confirmationText).to.match(/Card Number:\s*\d+/);
        expect(confirmationText).to.match(/Name:\s*Edgaras/);
        expect(confirmationText).to.match(/Date:\s*\d{1,2}\/\d{1,2}\/\d{4}/);
      });
  
      // Close the confirmation modal
      cy.get('.confirm').click();
    });
  });