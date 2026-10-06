import{test,expect} from '@playwright/test';

test("hard assertion vs soft assertions",async({page})=>{

    await page.goto("https://demowebshop.tricentis.com/");

    // Hard assertions
    // await expect(page).toHaveTitle("Demo Web Shop");
    // await expect(page).toHaveURL("https://demowebshop.tricentis.com/");
    // await expect(page.getByAltText("Tricentis Demo Web Shop")).toBeVisible();
    // // const logo = page.getByAltText("Tricentis Demo Web Shop");  // img[alt='Tricentis Demo Web Shop']
    // // await expect(logo).toBeVisible();

    // await page.waitForTimeout(5000);

    // Soft Assertions
    await expect.soft(page).toHaveTitle("Demo Web Shop2");  // failed
    await expect.soft(page).toHaveURL("https://demowebshop.tricentis.com/");
    await expect.soft(page.getByAltText("Tricentis Demo Web Shop")).toBeVisible();


    await page.waitForTimeout(5000);



});