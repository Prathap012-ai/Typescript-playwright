import{test,expect, Locator}from '@playwright/test'

test("Verify demo web table",async({page})=>{
    await page.goto("https://demoqa.com/webtables");

    // capture table
    const table:Locator= page.locator("table.-striped tbody");
    // 1. count number of rows in a table
    const tableRows:Locator = table.locator("tr");
    await expect(tableRows).toHaveCount(3)  // approach 1


    const rowCount:number = await tableRows.count()
    console.log("Number of rows:",rowCount); 
    expect(rowCount).toBe(3)  // approach 2

    // 2. count number of headers/columns
    const columns:Locator = page.locator("table.-striped thead th");
    await expect(columns).toHaveCount(7)

    const columnCount:number=await columns.count()
    console.log("Number of columns:",columnCount)
    expect(columnCount).toBe(7); 

    //3. Read all data from 2nd row (index 2 means 3rd row including header)
    const secondRow:Locator = tableRows.nth(1).locator("td");
    const secondRowText:string[]=await secondRow.allInnerTexts();
    console.log(secondRowText)
    expect(secondRow).toHaveText(['Alden','Cantrell','45','alden@example.com','12000','Compliance',''])


    console.log("2nd row Data.........");
    for(const text of secondRowText){
        console.log(text)

    }


    // 4. Read all data from the table (excluding header)
    const allRows:Locator[]=await tableRows.all();
    console.log((await columns.allInnerTexts()).join("\t"))
    for(const row of allRows){
        const cols =await row.locator("td").allInnerTexts()
        console.log(cols.join("\t"));
    }

    // print book names where author name is Cierra
    console.log("printing the Cierra gmail");

    const CieraGmail:string[]=[];
    for(const row of allRows){
        const cells = await row.locator("td").allInnerTexts();
        const name = cells[0]
        const gmail = cells[3]

        if(name==="Cierra"){
            console.log(`${name}\t${gmail}`);
            CieraGmail.push(gmail);

        }
    }
    expect(CieraGmail).toHaveLength(1);

    // Calculate total price of all salary

    console.log("printing total salary.......");

    let totalSalary:number=0;
    for(const sal of allRows){
        const cells = await sal.locator("td").allInnerTexts()
        const salary=cells[4];

        totalSalary=totalSalary+parseInt(salary);

    }
    console.log(totalSalary);
    expect(totalSalary).toBe(24000);



});