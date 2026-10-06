import{test,expect,Locator}from '@playwright/test'

test("Autosuggest dropdown",async({page})=>{
await page.goto("https://www.flipkart.com/")

await page.locator("input.nw1UBF.v1zwn26:visible").fill("smart");
await page.waitForTimeout(3000);
// get all the suggested options --> ctrl+shift+p on dom --> emulate focused page
const options:Locator= page.locator("ul>li");
const count = await options.count();
console.log("Number of options:",count); //8

// printing all the suggested options in the console
//console.log("5th options :",await options.nth(5).innerText());

console.log("Printing the all auto suggestion options..")
for(let i=0;i<count;i++){
    // console.log(await options.nth(i).innerText());
    console.log(await options.nth(i).textContent());
    

}


// select/click on the smartphone option 
for(let i=0;i<count;i++){
    const text =await options.nth(i).innerText();
    if(text === 'smartphone'){
        options.nth(i).click();
        break;
    }
    

}




await page.waitForTimeout(3000);







});