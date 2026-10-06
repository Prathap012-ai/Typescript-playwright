import { test, expect } from '@playwright/test';




// test data 
const loginTestData: string[][] = [
    ["laura.taylor1234@example.com", "test123", "valid"],
    ["Invaliduser@example.com", "test321", "invalid"],
    ["validuser@example.com", "testxyz", "invalid"],
    ["", "", "invalid"]

];

// using for loop 
//for (const data of loginTestData){  // it will print like entire row ,["laura.taylor1234@example.com","test123","valid"], 
for (const [email, password, validity] of loginTestData) {
    test.describe("Login data for driven test", async () => {

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

    });
}



/* 
test("Login test", async ({ page }) => {

    await page.goto("https://demowebshop.tricentis.com/login")
    await page.getByRole('textbox', { name: 'Email:' }).fill(email)
    await page.getByLabel('Password:').fill(password);
    await page.locator('input.button-1.login-button').click();

    if (validity.toLocaleLowerCase() === 'valid') {
        // Assert logout link is visible 
        const logoutLink = page.getByRole('link', { name: 'Log out' })
        await expect(logoutLink).toBeVisible();


    } else {
        // Assert error message is visible 
        const errorMessage = page.locator('div.validation-summary-errors');
        await expect(errorMessage).toBeVisible();

    }
    // assert user is still on the login page
    expect(page).toHaveURL("https://demowebshop.tricentis.com/login")

}); */





