# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: reports\report.spec.ts >> search test
- Location: tests\reports\report.spec.ts:61:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('h2 a').first()
Expected substring: "laptop"
Received string:    ""

Call log:
  - Expect "toContainText" locator('h2 a').first() with timeout 5000ms
  - waiting for locator('h2 a').first()
  - Protocol error (Runtime.callFunctionOn): Internal server error, session closed.

```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test';
  2  | /* 
  3  | 
  4  | default report type is html that stores in the folder called "playwright-report" in the root directory of the project.
  5  | 
  6  |     reporter: 'html', this is default report type in playwright.config.ts file. 
  7  | 
  8  | To change the report location in playwright.config.ts file add below line,
  9  | 
  10 | and also add the allure report  first we need to install allure report modules
  11 | pre- requisites:
  12 |      install allure 
  13 |         npm install -D allure-playwright
  14 | 
  15 |     reporter:[['list'],  // list reporter 
  16 |               ['line'], // line reporter
  17 |               ['dot'],  // dot reporter
  18 |               ['json',{outputFile:'results.xml'}], // json reporter
  19 |               ['junit',{outputFile:'results.json'}], // junit reporter
  20 |               ['html',{open:'always',outputFolder:'html-report'}],  // html report location changed to html-report folder
  21 | 
  22 |               first install allure report modules:
  23 |               npm install -D allure-playwright
  24 | 
  25 |               then add this in the reporter section of playwright.config.ts file
  26 |               ['allure-playwright'],  // this is for allure results 
  27 | 
  28 |               // allure results are added to see the report in allure report we need to install command line below
  29 |                 npm install -g allure-commandline   
  30 | 
  31 |                 To generate allure report run below command in the terminal
  32 |                 allure generate ./allure-results -o ./allure-report 
  33 |                 
  34 |                 for clean up the allure report run below command in the terminal
  35 |                 allure generate ./allure-results -o ./allure-report --clean
  36 | 
  37 |                 To open the allure report run below command in the terminal
  38 |                 allure open ./allure-report
  39 | 
  40 | 
  41 |     
  42 |              ],
  43 | 
  44 | 
  45 | */
  46 | 
  47 | 
  48 | 
  49 | test.beforeEach("open application",async({page})=>{
  50 |     await page.goto("https://demowebshop.tricentis.com/");
  51 | });
  52 | 
  53 | test("logotest",async({page})=>{
  54 |     await expect( page.getByRole('img', { name: 'Tricentis Demo Web Shop' })).toBeVisible();
  55 | });
  56 | 
  57 | test("title test",async({page})=>{
  58 |     await expect(page).toHaveTitle("Demo Web Shop1");
  59 | });
  60 | 
  61 | test("search test",async({page})=>{
  62 |     await page.locator('#small-searchterms').fill("laptop");
  63 |     await page.locator('input.button-1.search-box-button').click();
> 64 |     await expect(page.locator("h2 a").nth(0)).toContainText("laptop",{ignoreCase:true});
     |                                               ^ Error: expect(locator).toContainText(expected) failed
  65 | 
  66 | });
```