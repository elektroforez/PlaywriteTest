import { test, expect } from "../fixtures/fixtures";
import { faker } from "@faker-js/faker";

const searchText = faker.word.sample();

test.describe("Search tests", () => {
  test("Home page search", async ({ header, searchPage }) => {
    await header.fillSearchInput(searchText);
    await header.runSearch();

    const [noResults, inTitle] = await Promise.all([
      searchPage.isNoResultsVisible(),
      searchPage.isTextInResults(searchText)
    ]);

    await expect((noResults) || inTitle ).toBeTruthy();
  }),
    test("Search page search", async ({ searchPage }) => {
      await searchPage.inputSearchText(searchText);
      await searchPage.clickSearchButton();

      const [noResults, inTitle ] = await Promise.all([
        searchPage.isNoResultsVisible(),
        searchPage.isTextInResults(searchText)
      ]);

      await expect((noResults) || inTitle).toBeTruthy();
    });
});
