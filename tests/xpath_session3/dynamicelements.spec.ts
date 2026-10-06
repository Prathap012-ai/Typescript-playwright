import{test,expect,Locator} from '@playwright/test'
// using xpath 
/*
test("Handle Dynamic Elements using Xpath",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    // Loop to click the button 5 times.

    for(let i=1;i<=5;i++){

        let button:Locator = page.locator("//button[text()='START' or text()='STOP']"); // Locate the button with either 'STOP' or 'START'
        //let button = page.locator("//button[@name='start']");
        //let button = page.locator("//button[@name='start' or @name='stop']");
        //let button = page.locator("//button[contains(@name,'st')]");
        //let button  = page.locator("//button[starts-with(@name,'st')]");

        // click the button
        await button.click();
        
        // wait for 2 seconds
        await page.waitForTimeout(2000);

    }

});
*/

// by using CSS
/* test("Handle Dynamic Elements using CSS",async({page})=>{
    // Navigate to the target page
    await page.goto("https://testautomationpractice.blogspot.com/");

    // Loop to click the button 5 times.

    for(let i=1;i<=5;i++){
        // Locate the button using a CSS attribute selector (name can be 'start' or 'stop')

        let button:Locator = page.locator("button[name='start'],button[name='stop']"); // Locate the button with either 'STOP' or 'START'


        // click the button
        await button.click();
        
        // wait for 2 seconds
        await page.waitForTimeout(2000);

    }

}); */

// Using playwright specific locators

test("Handle Dynamic Elements using playwright built in locators",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    // Loop to click the button 5 times.

    for(let i=1;i<=5;i++){

        // Locate button by role and dynamic name
        const button:Locator = page.getByRole('button',{name:/START|STOP/}); // Locate the button with either 'STOP' or 'START'


        // click the button
        await button.click();
        
        // wait for 2 seconds
        await page.waitForTimeout(2000);

    }

});
