import{test,expect, Locator,Page}from '@playwright/test'

async function selectDate(targetYear:string,targetMonth:string,targetDate:string,page:Page,isFuture:boolean){
    while(true){    

    const curMonth = await page.locator(".ui-datepicker-month").textContent();
    const curYear = await page.locator(".ui-datepicker-year").textContent();
    
    if(curMonth===targetMonth && curYear===targetYear){
        break;

    }
    if(isFuture){
        await page.locator(".ui-datepicker-next").click();  // future 
    }else{
        await page.locator(".ui-datepicker-prev").click();  // past
    }


}
    
    const allDates = await page.locator(".ui-datepicker-calendar tbody td").all();
    
    for(const dt of allDates){

        const dtText = await dt.innerText();
        if(dtText === targetDate){
            await dt.click()
            break;
        }

    }

    


}






test("Handle JQuery date picker",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    
    // datepicker
    const dateInput:Locator = page.locator("#datepicker");
    await expect(dateInput).toBeVisible();

    // Approach 1 : using fill() method
    // await dateInput.fill("09/22/2026")      //mm/dd/yyyy

    
/*     // select target date
    const year="2027";
    const month ="June";
    const date="10"; */

    // select target date
    const year="2023";
    const month ="June";
    const date="10";
    // Approach 2: using date picker

    await dateInput.click(); // opens the date picker

    await selectDate(year,month,date,page,false); // futureDate = true  pastDate=false

    const expectedDate="06/10/2023";
    await expect(dateInput).toHaveValue(expectedDate);


});


