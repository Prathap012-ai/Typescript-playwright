import{test,expect, Locator}from '@playwright/test'

test("Multi select dropdown",async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");
await page.waitForLoadState();

// 1. select option from the dropdown ( 4 ways)

// await page.locator("#colors").selectOption(["Red","Blue","Green"]);  // using visible text
// await page.locator("#colors").selectOption(['red','white','green']);  // using value attribute
// await page.locator("#colors").selectOption([{label:"Red"},{label:"Blue"},{label:"Green"}]);  // using label
// await page.locator("#colors").selectOption([{index:0},{index:2},{index:4}]);


// 2. check number of options in the dropdown (count)
const dropdownOptions:Locator = page.locator("#colors option");
await expect(dropdownOptions).toHaveCount(7);


// 3. check an option present in the dropdown
const optionsText:string[] = (await dropdownOptions.allTextContents()).map(text=>text.trim());
console.log(optionsText);
expect(optionsText).toContain("Green"); // check if the array contains 'Green'

// 4. printing options from the dropdown

for(const option of optionsText){
    console.log(option);
}



await page.waitForTimeout(3000);







});