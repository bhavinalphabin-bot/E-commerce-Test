import { Page } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}

  async proceedToCheckout() {
    await this.page.locator(
      '.check_out'
    ).click();
  }

  async placeOrder() {
    await this.page.locator(
      'a[href="/payment"]'
    ).click();
  }

  async enterPaymentDetails() {

    await this.page.locator(
      '[data-qa="name-on-card"]'
    ).fill('Bhavy');

    await this.page.locator(
      '[data-qa="card-number"]'
    ).fill('799020152503');

    await this.page.locator(
      '[data-qa="cvc"]'
    ).fill('23');

    await this.page.locator(
      '[data-qa="expiry-month"]'
    ).fill('12');

    await this.page.locator(
      '[data-qa="expiry-year"]'
    ).fill('2030');
  }

  async submitOrder() {
    await this.page.locator(
      '[data-qa="pay-button"]'
    ).click();
  }
}