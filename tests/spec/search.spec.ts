import { test, expect } from "../fixtures/fixtures";
import { faker } from "@faker-js/faker";

const searchText = faker.string.numeric({length: 4, allowLeadingZeros: false});

test.describe("Search tests", () => {
  test("Home page search", async ({ page, header }) => {
    await header.fillSearchInput(searchText);
    await header.runSearch();

    await expect(page).toHaveURL(`/issues/${searchText}`);
  }),
    test("Search page search", async ({ page, searchPage }) => {
      await searchPage.inputSearchText(searchText);
      await searchPage.clickSearchButton();

      await expect(page).toHaveURL(`/issues/${searchText}`);
    });
});
