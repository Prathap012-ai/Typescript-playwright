import{test,expect,Page} from '@playwright/test';
test("Authenticated popup",async({browser})=>{
    const context = await browser.newContext({httpCredentials:{username:'admin',password:'admin'}});
    const page = await context.newPage();

    //https://the-internet.herokuapp.com/basic_auth
    //https://username:password@the-internet.herokuapp.com/basic_auth

    // Approach 1 : directly pass login along with url 

    // await page.goto("https://the-internet.herokuapp.com/basic_auth");
    // //await page.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth");
   
    // await page.waitForLoadState();  // wait for page loaded completely
    // const  text  = await page.locator(".example p").innerText();
    // console.log(text);
    // await expect(page.locator(".example p")).toBeVisible();


    //preferable in playwright)
    // Approach 2 : pass the logic along with the browser context 
        await page.goto("https://the-internet.herokuapp.com/basic_auth");
    //await page.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth");
   
    await page.waitForLoadState();  // wait for page loaded completely
    const  text2  = await page.locator(".example p").innerText();
    console.log(text2);
    await expect(page.locator(".example p")).toBeVisible();










});