import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://automationexercise.com/login');
  }

  async login(email: string, password: string) {
    await this.page.locator('[data-qa="login-email"]')
      .fill(email);

    await this.page.locator('[data-qa="login-password"]')
      .fill(password);

    await this.page.locator('[data-qa="login-button"]')
      .click();
  }
}
