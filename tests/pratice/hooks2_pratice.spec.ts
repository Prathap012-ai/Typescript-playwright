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
    await page.goto("https://demowebshop.tricentis.com/");
    

});

test.afterAll("Close my application",async()=>{
    page.close();
});

test.beforeEach("Login",async()=>{
    await expect( page.getByRole('link', { name: 'Log in' })).toBeVisible();
    await  page.getByRole('link', { name: 'Log in' }).click();
    await page.getByRole('textbox', { name: 'Email:' }).fill("corevih378@deertees.com");
    await page.getByLabel('Password:').fill("darling123")
    await page.locator('input.button-1.login-button').click();
    await page.waitForTimeout(2000);


});

test.afterEach("Logout",async()=>{
    await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
    await page.getByRole('link', { name: 'Log out' }).click();

});

test("Find number of products",async()=>{
    const products = page.locator('.product-grid .product-title');
    const count = await products.count();
    console.log("products count ",count);
    await expect(products).toHaveCount(6);
});

test("Add to cart ",async()=>{
    await page.locator('.product-grid .product-title').filter({hasText:'Simple Computer'}).click();
    await expect(page.getByRole('heading', { name: 'Simple Computer' })).toBeVisible();

/*     page.once("dialog",(dialog)=>{
        console.log("dialog message",dialog.message());
        expect(dialog.message).toContain("Product added");
        dialog.accept();

    }); */
    await page.getByRole('radio', { name: 'Slow' }).click()
    await page.locator('#add-to-cart-button-75').click()

});
