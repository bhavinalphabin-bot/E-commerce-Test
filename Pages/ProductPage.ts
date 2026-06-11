import { Page } from '@playwright/test';

export class ProductPage {
  constructor(private page: Page) {}

async openProducts() {
  await this.page.getByRole('link', {
    name: 'Products'
  }).click();

  const consent = this.page.locator('button:has-text("Consent")');
  const isConsentVisible = await consent.isVisible().catch(() => false);
  if (isConsentVisible) {
    await consent.click();
  }
}

  async searchProduct(product: string) {
    const searchInput = this.page.locator('#search_product');
   await searchInput.waitFor({ state: 'visible', timeout: 15000 });
    await searchInput.fill(product);

    await this.page.locator('#submit_search').click();
  }

  async addFirstProductToCart() {
    const firstProduct = this.page.locator('.product-image-wrapper').first();

    await firstProduct.hover();

    await this.page.locator('.add-to-cart').first().click();

    await this.page.getByText('View Cart').click();
  }
}

