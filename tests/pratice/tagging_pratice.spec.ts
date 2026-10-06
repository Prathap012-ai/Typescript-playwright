import { test, expect } from '@playwright/test';

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




test("Check the Google title",{tag:'@sanity'}, async ({page}) => {
    await page.goto("https://www.google.com/")
    await expect(page).toHaveTitle('Google');
});

test("Verify the blaze demo login credentials",{tag:'@regression'}, async ({page}) => {
    await page.goto("https://www.demoblaze.com/index.html")
    await expect(page).toHaveTitle('STORE');
    await page.getByRole('link', { name: 'Log in' }).click();
    await page.locator('#loginusername').fill('esc123');
    await page.locator('#loginpassword').fill('esc123');
    await page.getByRole('button', { name: 'Log in' }).click();
    await expect(page.getByRole('link', { name: 'PRODUCT STORE' })).toBeVisible();
    await expect(page.locator('#nameofuser')).toContainText('Welcome esc123');
    await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
    await page.getByRole('link', { name: 'Log out' }).click();

});


test("Verifying the Popular on the Google Store",{tag:'@sanity , @regression'}, async ({page}) => {
    await page.goto("https://www.google.com/")
    await expect(page).toHaveTitle('Google');
    await page.getByRole('link', { name: 'Store' }).click();
    expect(page.getByRole('heading', { name: 'Popular on the Google Store.' })).toHaveText("Popular on the Google Store.")
});