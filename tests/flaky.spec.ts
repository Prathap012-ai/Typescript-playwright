import{test,expect}from '@playwright/test';

test("Handle the flaky test",async({page,context})=>{



  await page.goto('https://www.demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').fill('esc123');
  await page.locator('#loginpassword').fill('esc123');
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page.getByRole('link', { name: 'PRODUCT STORE' })).toBeVisible();
  await expect(page.locator('#nameofuser')).toContainText('Welcome esc123');
  await page.waitForTimeout(5000);
  await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
  await page.getByRole('link', { name: 'Log out' }).click();





});