// loginPage.js
const { expect } = require('@playwright/test');

class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameField = page.locator('input[name="username"]');
        this.passwordField = page.locator('input[name="password"]');
        this.loginButton = page.locator('button[type="submit"]');
        this.successMessage = page.locator('#flash');
    }

    async navigate() {
        await this.page.goto('/login');
    }

    async enterCredentials(username, password) {
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
    }

    async clickLogin() {
        await this.loginButton.click();
    }

    async verifySuccessMessage(expectedMessage) {
        const successMessage = await this.successMessage.textContent();
        await expect(successMessage).toContain(expectedMessage);
    }
}

module.exports = LoginPage;