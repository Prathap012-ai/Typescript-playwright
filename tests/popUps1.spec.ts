import{test,expect,Page} from '@playwright/test';
test("Handle popups1",async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://testautomationpractice.blogspot.com/");

    // Multiple popups
    //await page.waitForEvent('popup');
    //await page.locator("#PopUp").click();

    await Promise.all([page.waitForEvent('popup'),await page.locator("#PopUp").click()])

    await page.waitForTimeout(3000);

    const allPopUpWindows = context.pages(); 
    console.log("Number of pages/windows:",allPopUpWindows.length); //3

    console.log(allPopUpWindows[0].url());  // returns url of the main page/parent
    console.log(allPopUpWindows[1].url());  // https://www.selenium.dev/
    console.log(allPopUpWindows[2].url());  // https://playwright.dev/

    for(const pw of allPopUpWindows){
        const title = await pw.title();
        if(title.includes("Selenium")){
            await expect(pw.getByRole("heading",{name:"Getting Started"})).toBeVisible();
            // perform any other actions...
            await pw.close();   // this will close selenium pop window

        }


    }
    await page.waitForTimeout(5000);




});
