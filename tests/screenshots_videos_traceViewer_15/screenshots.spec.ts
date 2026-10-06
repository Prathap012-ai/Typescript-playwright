import {test,expect} from '@playwright/test'

test("Handling screenshots demo",async({page})=>{

    await page.goto("https://demowebshop.tricentis.com/");

    const timeStamp = Date.now();

    // page screenshot
    // await page.screenshot({path:'screenshots/'+'Homepage'+timeStamp+'.png'});

    // full page screenshot
   // await page.screenshot({path:'screenshots/'+'fullPage'+timeStamp+'.png',fullPage:true});

    // element screenshot
    //await page.getByAltText("Tricentis Demo Web Shop").screenshot({path:"screenshots/"+"logo"+timeStamp+".png"})
    await page.locator(".product-grid.home-page-product-grid").screenshot({path:"screenshots/"+"featuredProducts"+timeStamp+".png"})

});

test.only("Handling screenshots from config",async({page})=>{

    await page.goto('https://www.demoblaze.com/index.html');
    await page.getByRole('link', { name: 'Log in' }).click();
    await page.locator('#loginusername').fill('esc123');
    await page.locator('#loginpassword').fill('esc123');
    await page.getByRole('button', { name: 'Log in' }).click();
    await expect(page.getByRole('link', { name: 'PRODUCT STORE' })).toBeVisible();
    await expect(page.locator('#nameofuser')).toContainText('Welcome esc123');
    await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
    await page.getByRole('link', { name: 'Log out' }).click();
});