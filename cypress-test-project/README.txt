# Cypress Automation Tests

## Project Overview This repository contains Cypress end-to-end tests for the [Demoblaze](https://www.demoblaze.com) e-commerce application. The tests cover adding products to the cart, completing the checkout process, and user registration and login. 

## Prerequisites - **Node.js:** v14 or higher - **npm:** v6 or higher

## Installation and Setup 1. **Clone the Repository:** ```bash git clone <repository-url>

2. Navigate to the Project Directory:
cd <project-directory>

3.Install Dependencies: This will install Cypress along with other necessary packages.
npm install

4.Install Cypress: Cypress will be installed automatically as part of npm install. However, you can manually install or update Cypress with:
npx cypress install

5.Open Cypress Test Runner: This will set up Cypress and open its interactive Test Runner.
npx cypress open


Running Tests
Run All Tests: To execute all tests in headless mode (suitable for CI/CD pipelines), use
npx cypress run

Generating and Viewing Reports
Install Required Packages:
npm install mochawesome mochawesome-merge mochawesome-report-generator --save-dev

Run Cypress with Mochawesome Reporter:
npx cypress run --reporter mochawesome


Test Structure
Tests: Located in cypress/e2e/:
add_to_cart.cy.js: Tests adding a product to the cart.
checkout_flow.cy.js: Tests the checkout process.
user_registration_login.cy.js: Tests user registration and login.

Utilities: Utility functions are in cypress/support/utils.js.

Utility Functions
generateRandomUsername(length): Generates a random username of the specified length for use in tests. Located in cypress/support/utils.js.

Debugging and Troubleshooting
Use Cypress’s built-in tools for debugging test failures, such as time travel and screenshots.


This version of the README provides clear instructions for installing Cypress as part of the `npm install` process and includes a command for manually installing or updating Cypress.








