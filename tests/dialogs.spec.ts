// alert(),confirm(),prompt() dialogs/JSalerts
// Reference: https://playwright.dev/docs/dialogs#alert-confirm-prompt-dialogs

//1) By default, dialogs are auto-dismissed by Playwright,so you don't have to handle them.
// 2) However, you can register a dialog handler before the action that triggers the dialog to either
// dialog.accept() or dialog.dismiss() it.

import{test,expect} from '@playwright/test'
test("Simple Dialog",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    //page.on("dialog",dialog=>dialog.accept());  // arrow function shortcut on dialog =>dialog.accept()
        // or 
/*     page.on("dialog",(dialog)=>{
        dialog.accept()
    });  */

    // Register a dialog handler
    page.on("dialog",(dialog)=>{
        console.log("Dialog type is:",dialog.type());  // returns type of dialog
        expect(dialog.type()).toContain("alert");
        console.log("Dialog message is:",dialog.message()); // returns message from dialog
        expect(dialog.message()).toContain("I am an alert box!");
        dialog.accept();

    });   // I am an alert box!
    await page.locator("button#alertBtn").click();  // opens dialog
    await page.waitForTimeout(5000);


});


test("Confirmation Dialog",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    //page.on("dialog",dialog=>dialog.accept());  // arrow function shortcut on dialog =>dialog.accept()
        // or 
/*     page.on("dialog",(dialog)=>{
        dialog.accept()
    });  */

    // Register a dialog handler
    page.on("dialog",(dialog)=>{
        console.log("Dialog type is:",dialog.type());  // returns type of dialog
        expect(dialog.type()).toContain("confirm");
        console.log("Dialog text:",dialog.message()); // returns message from dialog
        expect(dialog.message()).toContain("Press  button!a")
        dialog.accept();  // close dialog by accepting
        //dialog.dismiss(); // close dialog by dismissing
    });   // I am an alert box!


    await page.locator("button#confirmBtn").click();  // opens confirmation dialog
    const text:string = await page.locator("#demo").innerText();
    console.log("output text is:",text);
    await expect( page.locator("#demo")).toHaveText("You pressed OK!")
    //await expect( page.locator("#demo")).toHaveText("You pressed Cancel!")
    await page.waitForTimeout(5000);


});


test.only("Prompt Dialog",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    //page.on("dialog",dialog=>dialog.accept());  // arrow function shortcut on dialog =>dialog.accept()
        // or 
/*     page.on("dialog",(dialog)=>{
        dialog.accept()
    });  */

    // Register a dialog handler
    page.on("dialog",(dialog)=>{
        console.log("Dialog type is:",dialog.type());  // returns type of dialog
        expect(dialog.type()).toContain("prompt");
        console.log("Dialog text:",dialog.message()); // returns message from dialog
        expect(dialog.message()).toContain("Please enter your name:");
        
        expect(dialog.defaultValue()).toContain("Harry Potter");   // checks default value of the dialog

        dialog.accept("Prathap");  // close dialog by accepting
        //dialog.dismiss(); // close dialog by dismissing
    });  


    await page.locator("button#promptBtn").click();  // opens prompt dialog
    const text:string = await page.locator("#demo").innerText();
    console.log("output text is:",text);
    await expect( page.locator("#demo")).toHaveText("Hello Prathap! How are you today?")
    await page.waitForTimeout(5000);


});


