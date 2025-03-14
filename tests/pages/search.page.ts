import { type Locator, type Page } from "@playwright/test";
import { BasePage } from "./base.page";

export class SearchPage extends BasePage {
  readonly searchInput: Locator;
  readonly searchButton: Locator;

  constructor(page: Page) {
    super(page);
    this.searchInput = page.locator("#search-input");
    this.searchButton = page.locator("input[name='commit']");
  }

  async goto() {
    await super.goto("/projects/redmine/search");
  }

  async inputSearchText(text: string) {
    await this.searchInput.fill(text);
  }

  async clickSearchButton() {
    await this.searchButton.click();
  }
}
