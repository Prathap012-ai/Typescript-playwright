import{test,expect}from '@playwright/test'

test("bootstrap date picker - booking.com",async({page})=>{
    await page.goto("https://www.booking.com/");
    await page.waitForLoadState();




    // input date
    await page.waitForTimeout(3000);
   await page.getByTestId("searchbox-dates-container").click();
  

       // check in date
    const checkInYear:string="2027";
    const checkInMonth:string="November";
    const checkInDate:string="23";
   

   while(true){
    const monthYear =await page.locator("h3.e7addce19e.af236b7586").nth(0).textContent();
    const cur_month = monthYear?.split(" ")[0];
    const cur_year = monthYear?.split(" ")[1];

    if (cur_month == checkInMonth && cur_year == checkInYear){
        break;
    }else{
        await page.getByRole("button", {name:"Next month"}).click()
    }

   }
   // select specific date 
   const allDates = await page.locator("table.b8fcb0c66a tbody").nth(0).locator("td").all();
   let isCheckInDateSelected = false;

   for(const dt of allDates){
    const dtText = await dt.innerText();
    if(dtText === checkInDate){
        await dt.click()
        isCheckInDateSelected =true;
        break;
    }

   }
   
   


          // check out date
    const checkOutYear:string="2027";
    const checkOutMonth:string="December";
    const checkOutDate:string="10";
   

   while(true){
    const monthYear =await page.locator("h3.e7addce19e.af236b7586").nth(1).textContent();
    const cur_month = monthYear?.split(" ")[0];
    const cur_year = monthYear?.split(" ")[1];

    if (cur_month == checkOutMonth && cur_year == checkOutYear){
        break;
    }else{
        await page.locator("button[aria-label='Next month']").click()
    }

   }
   const allDates1 = await page.locator(".b8fcb0c66a").nth(1).locator("td").all();
   let isCheckOutDateSelected = false;

   for(const dt of allDates1){
    const dtText = await dt.innerText();
    if(dtText === checkOutDate){
        await dt.click()
        isCheckOutDateSelected =true;
        break;
    }

   }












   await page.waitForTimeout(5000);








});