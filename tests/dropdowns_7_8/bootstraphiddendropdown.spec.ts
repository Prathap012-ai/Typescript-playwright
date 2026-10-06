import{test,expect,Locator}from '@playwright/test'

test("Autosuggest dropdown",async({page})=>{

// demo orange hrm application
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

// login steps
await page.getByRole("textbox", {name:"Username"}).fill("Admin");
await page.getByPlaceholder("Password").fill("admin123");
await page.getByRole("button", {name:"Login"}).click();

// click on the pim 
await page.getByText("PIM",{exact:true}).click();

// click on the job title dropdown
const title:Locator= page.locator('form.oxd-form .oxd-select-text-input');
await title.nth(2).click();
await title.first().waitFor({state:'visible',timeout:3000});

// capture all the options from dropdown and count
const options:Locator = page.locator("div[role='listbox'] span");
await options.first().waitFor({state:'visible',timeout:3000})
const count:number=await options.count();
console.log("Number of options are",count);

// print all the options
for(let i=0;i<count;i++){
    console.log(await options.nth(i).innerText());
    //console.log(await options.nth(i).textContent());
}


// select / click on option
for(let i=0;i<count;i++){
    const text= await options.nth(i).innerText();
    if(text ==="QA Engineer"){
       await options.nth(i).click();
       break;


    }
}



await page.waitForTimeout(3000);




});