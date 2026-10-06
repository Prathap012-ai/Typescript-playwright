import{test,expect, Locator}from '@playwright/test'

test("Handling mouse actions",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const pointMe:Locator = page.locator(".dropbtn");
    await pointMe.hover();

    const laptop = page.locator('.dropdown-content a:nth-child(1)');
    await laptop.hover({timeout:2000});

    await page.waitForTimeout(5000);
});

test("Handling right click actions",async({page})=>{
    await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html");
    const  rightClickBtn:Locator = page.locator(".context-menu-one");
    await rightClickBtn.click({button:'right'});


    await page.waitForTimeout(5000);
});

test("Handling double click action",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const dbclick:Locator = page.locator("button[ondblclick='myFunction1()']");
    await dbclick.dblclick();

    const field2 = page.locator("#field2")
    await expect(field2).toHaveValue("Hello World!")

    await page.waitForTimeout(5000);
});

test.only("Handling drag and drop actions",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const dragSource = page.locator("#draggable");
    const dropTarget = page.locator("#droppable");

    // Appraoch1 : manual drag using hover()
    // await dragSource.hover();
    // await page.mouse.down()
    // await dropTarget.hover()
    // await page.mouse.up();

    // Approach 2: dragTo()
    await dragSource.dragTo(dropTarget);


    await page.waitForTimeout(5000);
});

