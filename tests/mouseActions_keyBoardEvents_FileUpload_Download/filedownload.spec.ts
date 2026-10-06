import {test,expect} from '@playwright/test';
import fs from "fs"; // "fs" mean File System module 

test("Handling download files",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/p/download-files_25.html")

    const inputText  = page.locator("#inputText");
    await inputText.fill("Generate Text");
    await page.getByRole("button",{name:"Generate and Download Text File"}).click();

    // Approach 1 using register an event 

    // const [download] = await Promise.all([page.waitForEvent("download"), page.locator("#txtDownloadLink").click()])
    // await download.saveAs("downloads/abc.txt");

    // if(fs.existsSync("downloads/testfile.txt")){
    //     console.log("File exists...")
    // }else{
    //     console.log("file not exists....")
    // }

        // Approach 2: Lambda equivalent
    page.on("download", async (download) => {
        await download.saveAs("downloads/testfile.txt");
    });

    await page.locator("#txtDownloadLink").click();

    await page.waitForTimeout(3000);

    if (fs.existsSync("downloads/testfile.txt")) {
        console.log("File exists");
    } else {
        console.log("File does not exist");
    }




    await page.waitForTimeout(3000);
});