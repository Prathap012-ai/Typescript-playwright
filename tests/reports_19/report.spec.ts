import {test,expect} from '@playwright/test';
/* 

default report type is html that stores in the folder called "playwright-report" in the root directory of the project.

    reporter: 'html', this is default report type in playwright.config.ts file. 

To change the report location in playwright.config.ts file add below line,

and also add the allure report  first we need to install allure report modules
pre- requisites:
     install allure 
        npm install -D allure-playwright

    reporter:[['list'],  // list reporter 
              ['line'], // line reporter
              ['dot'],  // dot reporter
              ['json',{outputFile:'results.xml'}], // json reporter
              ['junit',{outputFile:'results.json'}], // junit reporter
              ['html',{open:'always',outputFolder:'html-report'}],  // html report location changed to html-report folder

              first install allure report modules:
              npm install -D allure-playwright

              then add this in the reporter section of playwright.config.ts file
              ['allure-playwright'],  // this is for allure results 

              // allure results are added to see the report in allure report we need to install command line below
                npm install -g allure-commandline   

                To generate allure report run below command in the terminal
                allure generate ./allure-results -o ./allure-report 
                
                for clean up the allure report run below command in the terminal
                allure generate ./allure-results -o ./allure-report --clean

                To open the allure report run below command in the terminal
                allure open ./allure-report

                this is for custom reporter added by Prathap
                before this we have to create a file in project name anything copy the code from this 'https://playwright.dev/docs/test-reporters'
                custom report copy code paste into the file and then add below command to existing reporter

                ['./my-custom-reporter'],


    
             ],


*/



test.beforeEach("open application",async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");
});

test("logotest",async({page})=>{
    await expect( page.getByRole('img', { name: 'Tricentis Demo Web Shop' })).toBeVisible();
});

test("title test",async({page})=>{
    await expect(page).toHaveTitle("Demo Web Shop1");
});

test("search test",async({page})=>{
    await page.locator('#small-searchterms').fill("laptop");
    await page.locator('input.button-1.search-box-button').click();
    await expect(page.locator("h2 a").nth(0)).toContainText("laptop",{ignoreCase:true});

});