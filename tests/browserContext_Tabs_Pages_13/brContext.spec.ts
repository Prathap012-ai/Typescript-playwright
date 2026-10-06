import {test,expect, chromium} from '@playwright/test'
// Browser --> context --> pages

/* 
Browser --> Chromium,firefox,webkit
context --> we can hve multiple context,for multiple users/apps for the same browser
            // provide a way to operate multiple independent browser sessions.
page  ---> Tab,window,popup

*/

test("Browser Context demo",async()=>{
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page1 =  await context.newPage();
    const page2 = await context.newPage();

    // captured number of pages
    console.log("number of pages created",context.pages().length);

    await page1.goto("https://playwright.dev/");
    await expect(page1).toHaveTitle("Fast and reliable end-to-end testing for modern web apps | Playwright");

    await page2.goto("https://www.selenium.dev/")
    await expect(page2).toHaveTitle("Selenium");

    await page1.waitForTimeout(5000);
    await page2.waitForTimeout(5000);

    

});