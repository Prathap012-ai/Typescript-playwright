import {test,expect, Page, Locator} from '@playwright/test';

/* Requirements

open application  --- beforeAll()
    login   --- beforeEach()
        find no.of products   -- test
    logout --- afterEach()

    login --- beforeEach()
        add product to cart  -- test
    logout --- afterEach()
close my application  --- afterAll()

*/


let page:Page;   // this is page no need to pass every time to the test page fixture
test.beforeAll("Open Application",async({browser})=>{
    page = await browser.newPage();
    await page.goto("https://www.demoblaze.com/index.html");
    

});

test.afterAll("Close my application",async()=>{
    page.close();
});

test.beforeEach("Login",async()=>{
    await expect(page.locator("#login2")).toBeVisible();
    await page.locator("#login2").click();
    await page.locator('#loginusername').fill("esc123");
    await page.locator('#loginpassword').fill("esc123")
    await page.getByRole('button', { name: 'Log in' }).click();
    await page.waitForTimeout(2000);


});

test.afterEach("Logout",async()=>{
    await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
    await page.getByRole('link', { name: 'Log out' }).click();

});

test("Find number of products",async()=>{
    const products = page.locator('#tbodyid .hrefch');
    const count = await products.count();
    console.log("products count ",count);
    await expect(products).toHaveCount(9);
});

test("Add to cart ",async()=>{
    await page.locator('#tbodyid .hrefch').filter({hasText:'Sony vaio i7'}).click();
    await expect(page.getByRole('heading', { name: 'Sony vaio i7' })).toBeVisible();

    page.once("dialog",(dialog)=>{
        console.log("dialog message",dialog.message());
        expect(dialog.message).toContain("Product added");
        dialog.accept();

    });

    await page.getByRole('link', { name: 'Add to cart' }).click()

});
