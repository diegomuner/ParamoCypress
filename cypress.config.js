const { defineConfig } = require("cypress");
const faker = require("faker");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;



module.exports = defineConfig({
  e2e: {
    baseUrl:"https://demo.casino/",
    async setupNodeEvents(on, config) {
      on("task", {
        freshUser() {
          const user = {
            username: faker.name.firstName(),
            email: faker.internet.email(),
            password: "SuperSecret123!!",
            
          };
          return user;
        },
      });
  
    const bundler = createBundler({
    plugins: [createEsbuildPlugin(config)],
    });
    
    on("file:preprocessor", bundler);
    await addCucumberPreprocessorPlugin(on, config); 
    return config;
    },
    specPattern: "cypress/e2e/**/*.feature"
    },
  });
