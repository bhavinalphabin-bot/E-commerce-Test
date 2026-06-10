import { Page } from '@playwright/test';

export class ProductPage {
  constructor(private page: Page) {}

  async openProducts() {
    await this.page.getByRole('link', {
      name: 'Products'
    }).click();
  }

  async searchProduct(product: string) {
    await this.page.locator('#search_product')
      .fill(product);

    await this.page.locator('#submit_search')
      .click();
  }
async addFirstProductToCart() {

  const firstProduct = this.page
    .locator('.product-image-wrapper')
    .first();

  await firstProduct.hover();

  await this.page
    .locator('.add-to-cart')
    .first()
    .click();

  await this.page
    .getByText('View Cart')
    .click();
}
//   async addFirstProductToCart() {
//     await this.page.locator(
//       '.product-overlay .add-to-cart'
//     ).first().click();

  }
