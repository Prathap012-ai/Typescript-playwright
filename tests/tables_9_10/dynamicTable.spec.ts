import{test,expect, Locator}from '@playwright/test'

test("Verify chrome cpu in dynamic table",async({page})=>{
    await page.goto("https://practice.expandtesting.com/dynamic-table");

    // table 
    const table:Locator =  page.locator("table.table.table-striped tbody");
    await expect(table).toBeVisible();
    //table headers
    const table_headers: Locator = page.locator("table.table.table-striped thead");

    // Select all the rows, then find number of rows
    const tableRows:Locator[] = await table.locator("tr").all();
    // const count:number= await tableRows.count();
    console.log("Number of rows in a table :",tableRows.length); //4

    // Step 1: For chrome process get value of CPU load.
    // Read each row o check Chrome presence
    let cpuLoad ='';
    for (const row of tableRows){
        const name =await row.locator('td').nth(0).innerText();
        if(name ==="Chrome"){
            cpuLoad = await row.locator('td:has-Text("%")').innerText();   // this is css syntax
                 // or 
            // cpuLoad = await row.locator('td',{hasText:'%'}).innerText();   // this is playwright syntax

            console.log("CPU load of the Chrome:",cpuLoad);
            break;
        }
    }

    // Step 2 : Compare it with value in the yellow label.
    const yellowBoxText:string = await page.locator('#chrome-cpu').innerText();
    console.log("Chrome cpu load from yellow box :",yellowBoxText);

    if(yellowBoxText.includes(cpuLoad)){
        console.log("Cpu load of chrome is equal.");

    }else{
        console.log("Cpu load of chrome is not equal.")
    }
    expect(yellowBoxText).toContain(cpuLoad);





});