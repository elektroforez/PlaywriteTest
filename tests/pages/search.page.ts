import { expect, type Locator, type Page } from "@playwright/test";
import { BasePage } from "./base.page";

export class SearchPage extends BasePage {
  readonly searchInput: Locator;
  readonly searchButton: Locator;
  readonly searchResult: Locator;
  readonly searchResultHeading: Locator;

  constructor(page: Page) {
    super(page);
    this.searchInput = page.locator("#search-input");
    this.searchButton = page.locator("input[name='commit']");
    this.searchResult = page.locator("#search-results");
    this.searchResultHeading = page.locator("div[id='content'] h3");
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

  async isTextInResults(text: string) {
    const result = (await this.searchResult.textContent()) ?? "";
    return result.toLowerCase().includes(text);
  }

  async isNoResultsVisible() {
    const text = await this.searchResultHeading.textContent();
    return text === "Results (0)";
  }
}
