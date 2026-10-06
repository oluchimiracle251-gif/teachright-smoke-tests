# TeachRight smoke tests

Automated smoke tests for the TeachRight website, written with Playwright and JavaScript. I built this while following a tutorial, to learn how automated tests are written and run in a pipeline.

*Site tested:** https://teachright.netlify.app

#What the tests check

1. The homepage loads and has the right title
2. The sign-in form is visible, with email and password fields
3. The sign-up link is visible, and clicking it opens the account creation page

#Pipeline

A GitHub Actions workflow (`.github/workflows/smoke-test.yml`) runs the tests on every push, and it can also be started by hand. It installs Node.js 20, installs Playwright with Chromium, runs the tests, and uploads a test report.

My first pipeline run failed. I updated the test file, and the next run passed in about 40 seconds.

#How to run the tests locally

1. Install Node.js
2. Run `npm install`
3. Run `npx playwright install`
4. Run `npm test`

#What I learned

- How to set up a Playwright project
- How to find elements by their visible text and placeholders
- How to run tests in a GitHub Actions pipeline and fix a failed run

#Next steps

- Add negative tests, such as a wrong password
- Add more pages
