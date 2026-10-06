/* 
pre - requisite:

Install the xlsx module to read Excel files:
    npm install xlsx
*/


import { test, expect } from '@playwright/test';
import fs from "fs";
import * as XLSX from 'xlsx';



// Loaded excel file 
// file-->workbook-->sheets>row&columns


const excelPath = "C:/AutomationFiles/SDET TypeScript Programming and Playwright Automation/test_data/data.xlsx";
const workbook = XLSX.readFile(excelPath);
const sheetNames = workbook.SheetNames[0];  // return all the sheetNames
const worksheet = workbook.Sheets[sheetNames];

// convert worksheet into json
const loginData: any = XLSX.utils.sheet_to_json(worksheet);
//main test 
test.describe("Login excel data for driven test", async () => {
    // using for loop 
    for (const { email, password, validity } of loginData) {


        test(`Login test for ${email} and ${password}`, async ({ page }) => {


            await page.goto("https://demowebshop.tricentis.com/login")
            await page.getByRole('textbox', { name: 'Email:' }).fill(email)
            await page.getByLabel('Password:').fill(password);
            await page.locator('input.button-1.login-button').click();

            if (validity.toLocaleLowerCase() === 'valid') {
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
