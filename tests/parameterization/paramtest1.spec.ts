import{test,expect} from '@playwright/test';

// test Data
const searchItems:string[]=["Laptop","Gift card","Smartphone","Monitor"];

// for of loop
/* for(const item of searchItems){
    console.log("item for:",item);
    test(`search test for ${item}`,async({page})=>{   // will get duplicate title use this `search test for ${item}`
        await page.goto("https://demowebshop.tricentis.com/");
        await page.locator('#small-searchterms').fill(item)  // search 
        await page.locator('input.button-1.search-box-button').click();  // click on search button
        await expect(page.locator("h2 a").nth(0)).toContainText(item,{ignoreCase:true});
    });

} */

// using describe() for grouping

test.describe("Search Items",async()=>{
    for(const item of searchItems){
    console.log("item for:",item);
    test(`search test for ${item}`,async({page})=>{   // will get duplicate title use this `search test for ${item}`
        await page.goto("https://demowebshop.tricentis.com/");
        await page.locator('#small-searchterms').fill(item)  // search 
        await page.locator('input.button-1.search-box-button').click();  // click on search button
        await expect(page.locator("h2 a").nth(0)).toContainText(item,{ignoreCase:true});
    });

}
});


