import{test,expect, Locator}from '@playwright/test'

test("static web table",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    
    // capture table
    const table:Locator = page.locator("table[name='BookTable'] tbody");
    await expect(table).toBeVisible();

    // 1. count number of rows in a table.
    //const tableRows:Locator =page.locator("table[name='BookTable'] tbody tr");
    const tableRows:Locator =table.locator("tr");  // returns all the rows including header
    expect(tableRows).toHaveCount(7) //7 //approach 1


    const rowCount = await tableRows.count();
    console.log("Table rows:",rowCount);
    expect(rowCount).toBe(7);  // approach 2

    // 2. count number of headers/columns
    //const columns:Locator =page.locator("table[name='BookTable'] tbody tr th");
    const columns:Locator = tableRows.locator("th");
    await expect(columns).toHaveCount(4); //4  // approach 1

    const columnCount:number=await columns.count();
    console.log("Number of columns/headers:",columnCount);
    expect(columnCount).toBe(4) // approach 2

    // 3. Read all data from 2nd row (index 2 means 3rd row including header)

    const secondRowCells:Locator = tableRows.nth(2).locator('td');
    const secondRowText:string[] = await secondRowCells.allInnerTexts();
    console.log("2nd row Data",secondRowText);
    expect(secondRowCells).toHaveText([ 'Learn Java', 'Mukesh', 'Java', '500' ]);  // assertion

    console.log("2nd Row Data......")
    for(let text of secondRowText){
        console.log(text);
    }

    // 4. Read all data from the table (excluding header)
    console.log("printing all the table data...");

    const allRowData:Locator[]= await tableRows.all() // get all row locators  // all() returns array of locators
    console.log("BookName    Author    Subject    Price");
    for(let row of allRowData.slice(1)){   // slice(1) --> skip header row

        //const cols = await row.locator('td').allInnerTexts();
        const cols = await row.locator('td').allInnerTexts();
        console.log(cols.join('\t'));
    }

    // print book names where author name is Mukesh

    console.log("Books written by Mukesh..........");
    const mukeshBooks:string[]=[];
    for(let row of allRowData){
        const cells = await row.locator('td').allInnerTexts();
        const author = cells[1];
        const book = cells[0];
        
        if(author==='Mukesh'){
            console.log(`${author} \t ${book}`);
            mukeshBooks.push(book);
        }
    }
    expect(mukeshBooks).toHaveLength(2);  // assertion

    // Calculate total price of all books
    let totalPrice:number=0;
    for(let row of allRowData.slice(1)){  // slice (1) -->skip header row

        const cells = await row.locator('td').allInnerTexts();
        const price = cells[3];

        totalPrice=totalPrice+parseInt(price);


    }

    console.log("Total price :",totalPrice)
    expect(totalPrice).toBe(7100); //assertion










});