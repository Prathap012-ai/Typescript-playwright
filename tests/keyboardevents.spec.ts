import {test,expect}from '@playwright/test';

test("Handling key board events",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    const input1 = page.locator("#input1");

    // 1.focus on input
    await input1.focus();
    // 2. provide the text into input1 field 
    await page.keyboard.insertText("Welcome")

    // 3. Ctrl+A
    await page.keyboard.press("Control+A");

    // 4. ctrl + c
    await page.keyboard.press("Control+C");

    // 5. press Tab key 2 times to navigate /focus on input2

    await page.keyboard.press("Tab")
    await page.keyboard.press("Tab")

    //6. Ctrl+V paste the text inside the 2nd inputbox - input2
    await page.keyboard.press("Control+V");

    // 7. press Tab key 2 times to navigate /focus on input3

    await page.keyboard.press("Tab")
    await page.keyboard.press("Tab")

    //8. Ctrl+V paste the text inside the 3rd inputbox - input3
    await page.keyboard.press("Control+V");

    const input2 = page.locator("#input2");
    const input3 =  page.locator("#input3");

    await expect(input2).toHaveValue("Welcome")
    await expect(input3).toHaveValue("Welcome")

    await page.waitForTimeout(5000);


});