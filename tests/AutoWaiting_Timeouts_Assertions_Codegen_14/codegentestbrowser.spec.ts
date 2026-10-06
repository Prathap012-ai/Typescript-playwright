import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');
  await expect(page.getByRole('link', { name: 'PRODUCT STORE' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Log in' })).toBeVisible();
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').fill('esc123');
  await page.locator('#loginpassword').fill('esc123');
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page.getByRole('link', { name: 'Welcome esc123' })).toBeVisible();
  await expect(page.locator('#nameofuser')).toContainText('Welcome esc123');
  await expect(page.locator('#nava')).toMatchAriaSnapshot(`- link "PRODUCT STORE":- /url: index.html- img- text: ""`);
  await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
  await page.getByRole('link', { name: 'Log out' }).click();
});