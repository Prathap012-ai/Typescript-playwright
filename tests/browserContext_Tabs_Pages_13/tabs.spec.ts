import{test,expect,firefox} from '@playwright/test'

test("Browser Context demo",async()=>{
    const browser = await firefox.launch(); //creating browser
    const context = await browser.newContext(); // creating context
    // creating pages
    const parentPage =  await context.newPage();

    await parentPage.goto("https://testautomationpractice.blogspot.com/");
    const newTab = parentPage.getByText("New Tab");
    await expect(newTab).toBeVisible();
    
    // 2 statements should go parallel so use Promise.all()
    // context.waitForEvent("page");  // pending,fulfilled,rejected
    // await newTab.click();   // opens new Tab / new page

    const [childPage] = await Promise.all([context.waitForEvent("page"),await newTab.click()]);


    // Approach 1 : switch between pages and get titles(using context)
    const pages = context.pages();  // returns an array
    console.log("Number of pages/tabs:",pages.length);


    console.log("Title of the parent page:",await pages[0].title());
    console.log("Title of the child page:",await pages[1].title());

    // Approach 2: alternate
    
    console.log("Title of the parent page:",await parentPage.title());
    console.log("Title of the child page:",await childPage.title());








    await parentPage.waitForTimeout(3000);









});