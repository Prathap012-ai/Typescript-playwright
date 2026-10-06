import{test, expect} from '@playwright/test'

test("verify page url",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    let url:string = await page.url();
    console.log("Title:",url);
    await expect(page).toHaveURL(/testautomationpractice/);


});