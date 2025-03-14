import { test, expect } from '../fixtures/fixtures';
import { faker } from "@faker-js/faker";

const randomName = faker.internet.email();
const randomPassword = faker.internet.password();

const loginTestCases = [
    {
      username: process.env.USER_EMAIL as string,
      password: process.env.USER_PASSWORD as string,
      expectedError: null,
      description: "Valid login",
    },
    {
      username: randomName,
      password: randomPassword,
      expectedError: "Invalid username or password",
      description: "Invalid login",
    },
  ];

test.describe("login tests", () => {
    loginTestCases.forEach(({username, password, expectedError, description}) => {
        test(description, async ({loginPage}) => {
            await loginPage.login(username, password);        
            expectedError == null ? await loginPage.checkUrl('/my/page') : await expect(loginPage.errorMessage).toBeVisible();
        });   
    })
})

