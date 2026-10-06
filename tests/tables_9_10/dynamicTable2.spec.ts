import{test,expect, Locator}from '@playwright/test'

test("Verify chrome cpu in dynamic table",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    // table
    const table:Locator = page.locator("#taskTable tbody");

    // Select all the rows, then find number of rows

/*     const tableRows2 =  table.locator("tr");
    const tableRowsCount=await tableRows2.count();
    console.log("Number of rows in a table:",tableRowsCount); */

    const tableRows = await table.locator("tr").all();
    expect(tableRows.length).toBe(4);

    // Step 1: For chrome process get value of CPU load.
    // Read each row o check Chrome presence
    let cpuLoad='';
        for(const row of tableRows){
            const name = await row.locator('td').nth(0).innerText();

            if(name==="Chrome"){
                 cpuLoad = await row.locator("td:has-text('%')").innerText();

                 console.log("CPU load of chrome is",cpuLoad);
                 break;
            }
        }
    
    // Step 2 : Compare it with value in the yellow label.
    const yellowLabelText:string = await page.locator(".chrome-cpu").innerText();
    console.log("Chrome cpu load of yellow label:",yellowLabelText);

    if(yellowLabelText.includes(cpuLoad)){
        console.log("chrome cpu load is equal");

    }else{
        console.log("Chrome cpu load is not equal");
    }
    expect(yellowLabelText).toContain(cpuLoad);

});


test("Verify memory usage value for the firefox process in dynamic table",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    // table
    const table:Locator = page.locator("#taskTable tbody");

    // Select all the rows, then find number of rows
    const tableRows = await table.locator("tr").all();
    expect(tableRows.length).toBe(4);

    // Step 1: For firefox process get value of memory usage.
    // Read each row o check firefox presence
    let memoryUsage='';
        for(const row of tableRows){
            const fireFoxProcess = await row.locator('td').nth(0).innerText();

            if(fireFoxProcess ==="Firefox"){
                memoryUsage = await row.locator('td').filter({ hasText: /MB$/ }).first().innerText();

                 console.log("Memory usage of Firefox is",memoryUsage);
                 break;
            }
        }
    
    // Step 2 : Compare it with value in the yellow label.
    const blueLabelText:string = await page.locator(".firefox-memory").innerText();
    console.log("Firefox Memory usage of blue label:",blueLabelText);
    
    if(blueLabelText.includes(memoryUsage)){
        console.log("Memory usage is equal");

    }else{
        console.log("Memory usage is not equal");
    }
    expect(blueLabelText).toContain(memoryUsage);

});

test("Verify NetworkSpeed for Chrome in dynamic table",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    // table
    const table:Locator = page.locator("#taskTable tbody");

    // Select all the rows, then find number of rows
    const tableRows = await table.locator("tr").all();
    expect(tableRows.length).toBe(4);

    // Step 1: For Chrome  get value network speed.
    // Read each row o check chrome presence
    let NetworkSpeed='';
        for(const row of tableRows){
            const ChromeNetwork = await row.locator('td').nth(0).innerText();

            if(ChromeNetwork ==="Chrome"){
                NetworkSpeed = await row.locator("td:has-text('Mbps')").innerText();

                 console.log("Chrome networkSpeed is",NetworkSpeed);
                 break;
            }
        }
    
    // Step 2 : Compare it with value in the orange label.
    const orangeLabelText:string = await page.locator(".chrome-network").innerText();
    console.log("chrome network speed of orange label:",orangeLabelText);
    
    if(orangeLabelText.includes(NetworkSpeed)){
        console.log("Chrome network speed is equal");

    }else{
        console.log("chrome network speed is not equal");
    }
    expect(orangeLabelText).toContain(NetworkSpeed);

});

test.only("Verify DiscSpace for Firefox in dynamic table",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    // table
    const table:Locator = page.locator("#taskTable tbody");

    // Select all the rows, then find number of rows
    const tableRows = await table.locator("tr").all();
    expect(tableRows.length).toBe(4);

    // Step 1: For Firefox  get value Disc space.
    // Read each row o check firefox presence
    let DiscSpace='';
        for(const row of tableRows){
            const FirefoxDiscSpace = await row.locator('td').nth(0).innerText();

            if(FirefoxDiscSpace ==="Firefox"){
                DiscSpace = await row.locator("td:has-text('MB/s')").innerText();

                 console.log("Firefox DiscSpace is",DiscSpace);
                 break;
            }
        }
    
    // Step 2 : Compare it with value in the orange label.
    const violetLabelText:string = await page.locator(".firefox-disk").innerText();
    console.log("Firefox DiscSpace of violet label:",violetLabelText);
    
    if(violetLabelText.includes(DiscSpace)){
        console.log("Firefox DiscSpace is equal");

    }else{
        console.log("Firefox DiscSpace is not equal");
    }
    expect(violetLabelText).toContain(DiscSpace);

});



