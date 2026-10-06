import{test,expect, Locator}from '@playwright/test'

test(" Read and print data from a pagination table",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    // table 
    const table:Locator = page.locator("table#productTable tbody ");

    // pagination 
    const pagination = page.locator("#pagination");

    for(let pg=1;pg<=4;pg++){
        console.log(`\n============page${pg}==========`);

        const rows = table.locator('tr');
        const rowCount = await rows.count();
        expect(rowCount).toBe(5);

        for(let i=0;i<rowCount;i++){
            const row = rows.nth(i);
            // Read complete row data
            const rowsText =await row.locator("td").allInnerTexts();
            console.log(`Row ${i + 1}:`, rowsText);

            const checkBox = row.locator("td").last().locator("input[type='checkbox']");
            await expect(checkBox).toBeVisible();
            await checkBox.check();
            console.log(`Row ${i + 1} checkbox checked`);
        }

        // Click next page except on last page
        if(pg<4){
            await pagination.getByRole("link",{name:String(pg+1)}).click();
        }















    }



});