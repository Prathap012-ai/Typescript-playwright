/* 
pre - requisite:

Install the csv-parse module to read CSV files:
    npm install csv-parse
*/


import { test, expect } from '@playwright/test';
import fs from "fs";
import { parse } from 'csv-parse/sync';

// reading data from csv
const csvPath = "C:/AutomationFiles/SDET TypeScript Programming and Playwright Automation/test_data/data.csv";
const fileContent = fs.readFileSync(csvPath, 'utf-8');
interface LoginData {email: string;password: string;validity: string;}
const records = parse<LoginData>(fileContent, {columns: true,skip_empty_lines: true});
//main test 
test.describe("Login json data for driven test", async () => {
    // using for loop 
    for (const data of records) {

        test(`Login test with email: "${data.email}" and password: "${data.password}"`, async ({ page }) => {


            await page.goto("https://demowebshop.tricentis.com/login")
            await page.getByRole('textbox', { name: 'Email:' }).fill(data.email)
            await page.getByLabel('Password:').fill(data.password);
            await page.locator('input.button-1.login-button').click();

            if (data.validity.toLocaleLowerCase() === 'valid') {
                // Assert logout link is visible 
                const logoutLink = page.getByRole('link', { name: 'Log out' })
                await expect(logoutLink).toBeVisible({ timeout: 2000 });
                // await logoutLink.click();


            } else {
                // Assert error message is visible 
                const errorMessage = page.locator('div.validation-summary-errors');
                await expect(errorMessage).toBeVisible({ timeout: 2000 });


                // assert user is still on the login page
                expect(page).toHaveURL("https://demowebshop.tricentis.com/login")

            }


        });


    }
});



