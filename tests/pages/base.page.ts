import { expect, type Page } from "@playwright/test";

export class BasePage {
  protected readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(path: string = "/") {
    await this.page.goto(path);
  }

  async checkUrl(expectedUrl: string){
    await expect(this.page).toHaveURL(expectedUrl);
  }

  async getTitle() {
    await this.page.title();
  }
}
