import {test,expect}from '@playwright/test';
const testData : string [] =['Laptop',"Triumph speed 400","Smartphone","Buds"]


for (const item of testData){
    test(`parameterization with hard coded data${item}`,async({page})=>{
    await page.goto("https://www.amazon.in/");

    await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill(item);
    await page.locator('#nav-search-submit-button').click();
    await expect( page.getByText('All', { exact: true })).toBeVisible();

});

}
