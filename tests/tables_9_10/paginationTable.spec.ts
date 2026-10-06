import{test,expect, Locator}from '@playwright/test'

test("Read Data from the table pages",async({page})=>{
    await page.goto("https://datatables.net/");

    let hasMorePages = true;

/*     const rows:Locator[]=await page.locator("#myTable tbody tr").all();
    for(const row of rows){
        console.log(await row.innerText());
    } */

    while(hasMorePages){
        const rows:Locator[]=await page.locator("#myTable tbody tr").all();
        for(const row of rows){
            console.log(await row.innerText());
        }
        await page.waitForTimeout(2000);

        // button 
        //button[data-dt-idx='next']

        const nextButton:Locator = page.locator("button[data-dt-idx='next']");
        
        const isDisabled = await nextButton.getAttribute('class'); //dt-paging-button disabled next

        if(isDisabled?.includes('disabled')){
            hasMorePages=false;

        }else{
            await nextButton.click();
        }


    }

});



test("Filter the rows and check the rows count",async({page})=>{
    await page.goto("https://datatables.net/examples/core/basic_init/zero_configuration.html");

    // dropdown 
    const dropdown:Locator = page.locator('#dt-length-0');
    await dropdown.selectOption({label:'25'});

    
    // table rows 

    // Approach 1
    const rows =await page.locator("#example tbody tr").all();
    expect( rows.length).toBe(25)  // assertion
    
    // Approach 2
    const rows2 = page.locator("#example tbody tr");
    expect(rows2).toHaveCount(25);


});

test.only("Search for specific data in a table ",async({page})=>{
    await page.goto("https://datatables.net/examples/core/basic_init/zero_configuration.html");
    const searchbox :Locator = page.locator("#dt-search-0");
    //await searchbox.first().waitFor({state:'visible',timeout:5000});

    await searchbox.fill("Prescott Bartlett");
    await page.waitForTimeout(5000)
    
    const rows =await page.locator("#example tbody tr").all();

    if (rows.length>=1){

        let matchFound=false;

        for(let row of rows){
           const text =  await row.innerText();
           
           if(text.includes("Prescott Bartlett")){
            console.log("Record Exist - founds..");
            matchFound=true;
            break;

           }
        }
        //expect(matchFound).toBe(true);
        expect(matchFound).toBeTruthy();

    }else{
        console.log("No Rows found with search text..")
    }
});
