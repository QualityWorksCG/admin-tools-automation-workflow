// login.test.js
const { test, expect } = require('@playwright/test');
const LoginPage = require('../loginPage');

test.describe('Login Feature', () => {
    test('Verify Successful Login with Valid Credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);

        // Step 1: Navigate to the login page
        await loginPage.navigate();

        // Step 2: Enter valid username and password
        await loginPage.enterCredentials('tomsmith', 'SuperSecretPassword!');

        // Step 3: Click the login button
        await loginPage.clickLogin();

        // Verification: Check for success message
        await loginPage.verifySuccessMessage('You logged into a secure area!');
    });
});