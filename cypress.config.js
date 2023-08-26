const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env:{
    username : "Test001",
    password : "Test@123"
  },
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl:"https://automationteststore.com/",
    specPattern:"**/*.spec.js",
    screenshotOnRunFailure: true,
    video: true,
  },
});
