import { type Locator, type Page } from "@playwright/test";
import { BasePage } from "../base.page";

export class Header extends BasePage {
  readonly searchInput: Locator;
  readonly searchLink: Locator;
  readonly myPageLink: Locator;
  readonly projectsLink: Locator;

  constructor(page: Page) {
    super(page);
    this.page.waitForLoadState("load");
    this.searchInput = page.locator("#q");
    this.searchLink = page.locator("a[accesskey='4']");
    this.myPageLink = page.locator("a.my-page");
    this.projectsLink =page.locator("a.projects");
  }

  async fillSearchInput(text: string) {
    await this.searchInput.fill(text);
  }
  async runSearch() {
    await this.searchInput.press("Enter");
  }
  async clickSearchLink() {
    await this.searchLink.click();
  }

  async clickMyPageLink() {
    await this.myPageLink.click();
  }

  async clickProjectsLink() {
    await this.projectsLink.click();
  }
}
