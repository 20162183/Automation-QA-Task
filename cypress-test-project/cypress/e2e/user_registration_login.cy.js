import { generateRandomUsername } from '../support/utils';

    describe('User Registration and Login', () => {
    const username = 'testuser123'; // Replace with a unique username
    const password = 'Password123!'; // Replace with your password
  
    it('should register a new user and then log in successfully', () => {
      // Visit the website
      cy.visit('https://www.demoblaze.com');
      
      // Click on Sign up button
      cy.get('#signin2').click();
      
      // Wait for the modal to appear
      cy.wait(500); // Adjust if necessary
      
      // Fill in the registration form
      const randomUsername = generateRandomUsername();
      cy.get('#sign-username').type(randomUsername);
      cy.get('#sign-password').type(password);
      
      // Submit the registration form
      cy.get('button[onclick="register()"]').click();
      
      // Verify that the registration was successful
      cy.on('window:alert', (alertText) => {
        expect(alertText).to.contains('Sign up successful.');
      });
  
      // Wait for a bit to ensure the registration process is completed
      cy.wait(1000);
  
      // Log in with the newly registered user
      cy.get('#login2').click();
      
      // Wait for the login modal to appear
      cy.wait(500); // Adjust if necessary
      
      // Fill in the login form
      cy.get('#loginusername').type(randomUsername);
      cy.get('#loginpassword').type(password);
      
      // Submit the login form
      cy.get('button[onclick="logIn()"]').click();
      
      // Verify that the login was successful
      cy.get('#nameofuser').should('contain.text', `Welcome ${randomUsername}`);
    });
  });