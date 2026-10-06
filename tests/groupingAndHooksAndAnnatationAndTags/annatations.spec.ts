import{test,expect} from '@playwright/test';
/* 
only
skip
fail
fixme
slow
*/


// only - it will execute only this test not remaining tests
test("test1",async({page})=>{
    await page.goto("https://www.google.com/")
    await expect(page).toHaveTitle('Google');
});

// skip - skip the test 
test.skip("test2",async({page})=>{
    await page.goto("https://www.google.com/")
    await expect(page).toHaveTitle('Google');
});
// skip the test based on the test
test("test3",async({page,browserName})=>{
    test.skip(browserName ==="firefox","this test skipped if browser is firefox")
    await page.goto("https://www.google.com/")
    await expect(page).toHaveTitle('Google');
});
// fail - intentionally fail the test 

test.fail("test4",async({page})=>{
    await page.goto("https://www.google.com/")
    await expect(page).toHaveTitle('Google');
});
// fixme - intentionally use partially complete the code use this and this also skip the test
test.fixme("test5",async({page})=>{
    await page.goto("https://www.google.com/")
    await expect(page).toHaveTitle('Google');
});
//slow - is used to triple the time (default 30 secs  after tripling 90 secs)
test("test6",async({page})=>{
    test.slow() // triple the default timeout(default:30 secs after tripling 90 secs)
    await page.goto("https://www.google.com/")
    await expect(page).toHaveTitle('Google');
});