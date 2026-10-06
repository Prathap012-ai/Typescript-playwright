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
const allPopupWindows = context.pages();  // returns an array
console.log("Number of pages/windows:", allPopupWindows.length);

//console.log()

//await page.waitForTimeout(3000);


});