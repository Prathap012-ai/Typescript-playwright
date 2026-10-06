import{test,expect, Locator}from '@playwright/test'

test("Verify dropdown is Sorted",async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");
await page.waitForLoadState();

// const dropdownOptions:Locator = page.locator("#animals option"); // sorted
const dropdownOptions:Locator = page.locator("#colors option"); // not sorted


//console.log(await dropdownOptions.allTextContents());

const optionsText:string[]= (await dropdownOptions.allTextContents()).map(text=>text.trim());

const originalList:string[] = [...optionsText];  // ... means spread operator
const sortedList:string[] = [...optionsText.sort()];  // mutable

console.log("original list:",originalList);
console.log('sorted list',sortedList);

expect(originalList).toEqual(sortedList);

await page.waitForTimeout(3000);







});