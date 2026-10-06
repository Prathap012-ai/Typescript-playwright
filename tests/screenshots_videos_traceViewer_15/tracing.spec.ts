import{test,expect}from '@playwright/test';

test("tracing the test",async({page,context})=>{

/*   
 3 Ways to create trace file(.zip)
 -------------------------------- 
1) using playwright.config.ts    ---- trace:'retain-on-failure it is globally
2) using  command                 ---- 'npx playwright test tests/filename.spec.ts --trace on'
3)  code (programmatically) 
          context.tracing.start({screenshots:true,snapshots:true}) before test starts
          //statements
          context.tracing.stop({path:'trace.zip'})  at end stop the and file should be anything 


 To view trace file (3 ways)
 ---------------------
 1) from html file ----> click on trace.zip
 2) through command  - npx playwright show-trace trace.zip
 3) utility ----->  https://trace.playwright.dev/   (drag and drop/upload trace.zip file)


*/

  await context.tracing.start({screenshots:true,snapshots:true});
  await page.goto('https://www.demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').fill('esc123');
  await page.locator('#loginpassword').fill('esc123');
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page.getByRole('link', { name: 'PRODUCT STORE' })).toBeVisible();
  await expect(page.locator('#nameofuser')).toContainText('Welcome esc123');
  await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
  await page.getByRole('link', { name: 'Log out' }).click();
  await context.tracing.stop({path:'trace.zip'});  // this trace file not attached to report 




});