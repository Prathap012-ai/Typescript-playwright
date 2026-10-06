import{test,expect} from '@playwright/test';

test("Autowaiting and forcing",async({page})=>{
    //test.setTimeout(50000); // 50 secs
    //test.slow(); // 90000 ms / 90 secs
    await page.goto("https://demowebshop.tricentis.com/");
    // Assertions - Auto wait works
    await expect(page).toHaveURL("https://demowebshop.tricentis.com/");
    await expect(page.getByRole("heading", {name:"Welcome to our store"})).toBeVisible({timeout:10000});

    // Assertions - Auto wait works
    await page.locator("#small-searchterms").fill("Laptop",{force:true}) // search box - Force action(it will not so actionability checks)
    await page.locator("input.button-1.search-box-button").click({force:true}) // clicking on search button -Force action



});