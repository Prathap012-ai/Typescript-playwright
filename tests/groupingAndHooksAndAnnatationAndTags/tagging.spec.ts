import{test,expect}from '@playwright/test';

/* 

1. Run all sanity tests:
    npx playwright test tests/fileName.spec.ts --grep "@sanity"

2. Run all regression tests:
    npx playwright test tests/fileName.spec.ts --grep "@regression"

3. Run tests which are belongs to both sanity & regression   by using regular expression
    npx playwright test tests/fileName.spec.ts --grep "(?=.*@sanity)(?=.*@regression)"  

4. Run tests belongs to either sanity or regression.
    npx playwright test tests/fileName.spec.ts --grep "@sanity|@regression"

5. Run sanity tests which are not belongs to regression
    npx playwright test tests/fileName.spec.ts --grep "@sanity"  --grep-invert "@regression"
    

*/


// @sanity @regression Check the title of the homepage   
// add @ sanity or @regression either before the title or after title 

/* test(" @sanity @regression Check the title of the homepage" ,async({page})=>{
    await page.goto("https://www.google.com/")
    await expect(page).toHaveTitle('Google');
}); */
// 1 sanity 
test(" Check the title of the homepage" ,{tag:'@sanity'},async({page})=>{
    await page.goto("https://www.google.com/")
    await expect(page).toHaveTitle('Google');
});

test(" navigate to the store page" ,{tag:'@regression'},async({page})=>{
    await page.goto("https://www.google.com/")
    await page.getByRole('link', { name: 'Store' }).click();
    await expect(page).toHaveTitle("Google Store for Google Made Devices & Accessories");
});

test("Check the top recommendations" ,{tag:'@regression,@sanity'},async({page})=>{
    await page.goto("https://www.google.com/")
    await page.getByRole('link', { name: 'Store' }).click();
    await expect( page.getByText('Popular on the Google Store.', { exact: true })).toHaveText("Popular on the Google Store.");
});