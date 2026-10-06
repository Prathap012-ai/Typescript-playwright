import{test,expect}from '@playwright/test';
import path from "path";

test("Handling single file upload",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    //const location = "C:\\AutomationFiles\\SDET TypeScript Programming and Playwright Automation\\uploads\\Test1.txt";

     // by using path
    
    const filePath = path.join("../uploads/Test1.txt"); 


    // single file upload 
    await page.locator("#singleFileInput").setInputFiles(filePath);
    
    await page.getByRole("button", {name:"Upload Single File"}).click();

    await page.waitForTimeout(4000);



});

test.only("Handling file upload",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");



    //const path = ["C:\\AutomationFiles\\SDET TypeScript Programming and Playwright Automation\\uploads\\Test1.txt",
        //"C:\\AutomationFiles\\SDET TypeScript Programming and Playwright Automation\\uploads\\Test2.txt"];
    
    // By using path 

    const filePath = [
        path.join("../uploads/Test1.txt"),
        path.join("../uploads/Test2.txt")

    ]

    // multiple files upload 
    await page.locator("#multipleFilesInput").setInputFiles(filePath);
    
    await page.getByRole("button", {name:"Upload Multiple Files"}).click();

    await page.waitForTimeout(4000);



});
