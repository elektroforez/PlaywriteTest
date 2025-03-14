# PlaywrightTest

## Summary of Repo

This repository contains automated tests for [Readmine.org website](https://www.redmine.org/) using [Playwright](https://playwright.dev/) and [TypeScript](https://www.typescriptlang.org/). The tests are designed to ensure the functionality and reliability of web applications through automated browser interactions. Playwright is used for cross-browser testing, supporting Chromium, WebKit, and Firefox.

## Requirements

To get started with this project, you need to have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- [TypeScript](https://www.typescriptlang.org/) (optional, but required for TypeScript-based projects)
- Playwright testing tools (installed via npm)
- [faker](https://fakerjs.dev/)

## Steps to Install

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:

   If you’re using npm:

   ```bash
   npm install
   ```

   Or if you’re using Yarn:

   ```bash
   yarn install
   ```

3. Install Playwright browsers (Chromium, Firefox, and WebKit):

   ```bash
   npx playwright install
   ```

## Steps to Launch

To run the tests, use the following commands depending on your setup:

1. **For npm**:

   ```bash
   npm run test
   ```

2. **For Yarn**:

   ```bash
   yarn test
   ```

This will execute all tests defined in the project using Playwright.

## Steps to Creating the Report

1. **Configure report generation**: Make sure you have a reporter set up in your Playwright config file. For example:

   ```js
   // playwright.config.ts
   import { defineConfig, devices } from "@playwright/test";

   export default defineConfig({
     reporter: [["html", { outputFolder: "test-results" }]],
   });
   ```

2. **Run the tests with report generation**:

   After running the tests using the above commands (`npm run test` or `yarn test`), Playwright will generate a report in the `test-results` folder by default.

3. **View the report**: Open the generated HTML report in any browser to see the detailed results of your tests.

---
