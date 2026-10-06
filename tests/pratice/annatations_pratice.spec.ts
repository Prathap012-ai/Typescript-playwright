import { test, expect } from '@playwright/test';

/* 
only
skip
fail
fixme
slow
 */

// only - means it will execute only particular test 
test("Test1", async ({page}) => {
    await page.goto("https://www.google.com/")
    await expect(page).toHaveTitle('Google');
});
// skip - means it will skip the entire test by .skip
test.skip("Test2", async ({page}) => {
    await page.goto("https://www.google.com/")
    await expect(page).toHaveTitle('Google');
});
// skip - based on the condition
test("Test3", async ({page,browserName}) => {
    test.skip(browserName === "firefox","this is skipped if the browser is firefox")
    await page.goto("https://www.google.com/")
    await expect(page).toHaveTitle('Google');
});
// fail - intentionally fail the by using .fail
test.fail("Test4", async ({page}) => {
    await page.goto("https://www.google.com/")
    await expect(page).toHaveTitle('Google');
});
//fixme - this is also skip but partially complete the code we use this 
test.fixme("Test5",async({page})=>{
    await page.goto("https://www.google.com/")
    await expect(page).toHaveTitle('Google');
});
//slow - triple the time (90 secs)
test("Test6",async({page})=>{
    test.slow()  // the default time(30 secs) it wil be triple (90 secs)
    await page.goto("https://www.google.com/")
    await expect(page).toHaveTitle('Google');
});