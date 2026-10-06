import{test,expect} from '@playwright/test'

// fixture - global variable  : page, browser 
// all the steps to return promise 
// there is two keywords async and sync (sync is python playwright) 
// synchronous is executed step by step
// asynchronous is executed parallel
// promise  can be assurance  (resolved or rejected)
// if any statement return promise use await keyword 

test("verify page title",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    let MyTitle:string = await page.title();
    console.log("Title:",MyTitle);
    await expect(page).toHaveTitle('Automation Testing Practice');


});

