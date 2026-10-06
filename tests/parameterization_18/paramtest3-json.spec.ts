import { test, expect } from '@playwright/test';
import fs from "fs";


// reading data from json 
const jsonPath = "C:/AutomationFiles/SDET TypeScript Programming and Playwright Automation/test_data/data.json";
const loginData: any = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));

test.describe("Login json data for driven test", async () => {
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





