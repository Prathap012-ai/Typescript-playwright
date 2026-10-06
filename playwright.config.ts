import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
 // grep:/@sanity/,   // specifying by Prathap
  //grepInvert:/@regression/   ,  // specifying by Prathap

  // To change the timeout globally for all tests (default is 30000 ms/30 secs) - Prathap
  //timeout:60000,

  // To apply a longer wait for all expect conditions(default is 5000 ms / 5 secs) - Prathap
  //expect:{timeout:10000}

  // use: {
  //   viewport: { width: 1280, height: 800 }, // 1280x800 for all tests globally  - Prathap
  // },



  /* Run tests in files in parallel */
  fullyParallel:true,
  //fullyParallel: true,  // changed by Prathap

  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
   retries: process.env.CI ? 2 : 0,

  //Retry locally
  //retries: 3, // done by Prathap


  /* Opt out of parallel tests on CI. */
  // workers: process.env.CI ? 1 : undefined,
  workers:3,  // done by Prathap
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  //reporter: 'html',    // default report type is html that stores in "playwright-report" inside

   reporter:[['html',{open:'always',outputFolder:'html-report'}],
            /*['list'],  // list reporter 
            ['line'], // line reporter
            ['dot'],  // dot reporter
            ['json',{outputFile:'results.xml'}], // json reporter
            ['junit',{outputFile:'results.json'}], // junit reporter

            ['allure-playwright'], */ // allure report added by Prathap
            // allure results are added to see the report in allure report we need to install command line 
            ['./my-custom-reporter'],  // this is for custom reporter added by Prathap


],   // changed by Prathap report location to html-report


  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'off',
    // viewport: { width: 1280, height: 800 }, // 1280x800 for all tests globally  - Prathap
    screenshot:'only-on-failure',  // screenshot on the failure -- Prathap
    video:'retain-on-failure'  // record the video by Prathap

  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
      //fullyParallel: true,
    },
    /*
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    */
    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
