import { test, expect } from "../fixtures/fixtures";

test("Project page filtering", async ({projectsPage})=> {
    const textToSearch = "Red";
    await projectsPage.selectFilter('name');
    await projectsPage.fillNameInput(textToSearch);
    await projectsPage.clickApplyFilters();
    await projectsPage.checkProjectsInList(textToSearch);
});