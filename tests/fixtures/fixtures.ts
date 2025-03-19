import { test as baseTest } from "@playwright/test";
import { LoginPage } from "../pages/login.page";
import { Header } from "../pages/components/header";
import { SearchPage } from "../pages/search.page";
import { ProjectsPage } from "../pages/projects.page";

type MyFixtures = {
  loginPage: LoginPage;
  header: Header;
  searchPage: SearchPage;
  projectsPage: ProjectsPage;
};

export const test = baseTest.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await use(loginPage);
  },
  header: async ({ page }, use) => {
    const header = new Header(page);
    await header.goto();
    await use(header);
  },
  searchPage: async ({ page }, use) => {
    const searchPage = new SearchPage(page);
    await searchPage.goto();
    await use(searchPage);
  },
  projectsPage: async ({ page }, use) => {
    const projectsPage = new ProjectsPage(page);
    await projectsPage.goto();
    await use(projectsPage);
  },
});

export { expect } from "@playwright/test";
