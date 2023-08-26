# automationTestStoreProject
**It a demo project for automation ecom web-site(automationteststore.com) using cypress.**
- Here we create a basic test cases and framwork structure.
- cypress/e2e/system-test
    * Basically we are writing our test cases here and giving extension .spec.js.
    * Also we are following mocha framework to write a test cases.
- cypress/fixture
    * It is used to store response that we are using to mock this response in our test cases.
    * We mock our response using cy.intercept() method.
- cypress/pages
    * In pages folder basically we are creating page object for each page.
    * For each single page we create a folder and in which we are declaring a elements as well as methods.
    * For declaring element we are following some structure like we are start finding element from left to right and top to bottom and write down the same.
    * Using this structure if any new element added we will get to know in which place it get added and where we need to declare it.
- cypress/reports
    * Here we are using 'cypress-mochawesome-reporter/register' plugin to generate report.
    * It will give us a clear and understandable report for pass and failed test cases.
- cypress/support
    * In support folder there are 2 file,
      1. command.js - Here we are writing user define commands.
      2. e2e.js - It is used to import plugins.
- cypress/video
    * It will give us video about our test cases.
- cypress.config.js - It is used to define config files.
- package.json - Dependencies are added in package.json

  Note : To run this test cases follow below commands,
  1. Take a pull from repository
  3. Open terminal in VSCode.
  4. Check whether are you on correct path or not. If you are on correct path then type "npm i"
  - All dependency downloaded and added in package.json
  6. Also check is cypress install or not?
  7. If not then follow this document, https://docs.cypress.io/guides/getting-started/installing-cypress
  8. For running test cases in use following command,
     - For headed mode - npm run cy:run:headed
     - For Headless mode - npm run cy:run:headless
     - For opening cypress dashboard - npm run cypress
