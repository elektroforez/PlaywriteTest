import { expect, type Locator, type Page } from "@playwright/test";
import { BasePage } from "./base.page";

export class ProjectsPage extends BasePage {
  private readonly addFilterSelect: Locator;
  private readonly applyFilters: Locator;
  private readonly projectsList: Locator;
  private readonly nameInput: Locator;

  constructor(page: Page) {
    super(page);
    this.addFilterSelect = page.locator("#add_filter_select");
    this.applyFilters = page.locator("a.icon.icon-checked");
    this.projectsList = page.locator("ul.projects.root");
    this.nameInput = page.locator("#values_name");
  }

  async goto() {
    await super.goto("/projects");
  }

  async clickApplyFilters() {
    await this.applyFilters.click();
  }

  async fillNameInput(name: string) {
    await this.nameInput.waitFor({state:"visible"});
    await this.nameInput.fill(name);
  }

  async selectFilter(value: string){
    await this.addFilterSelect.selectOption(value);
  }

  async checkProjectsInList(name: string) {
    const firstProject = await this.projectsList.locator('li.root a.project').first();    
  
    await expect(firstProject).toContainText(name);
  }
}
