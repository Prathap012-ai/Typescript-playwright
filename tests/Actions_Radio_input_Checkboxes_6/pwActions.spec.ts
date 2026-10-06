import{test,expect, Locator}from '@playwright/test'

test("Text input Actions",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    
    // Text Input / Tex Box / Input Box
    // Radio Buttons
    // Check Boxes

    const textBox:Locator =page.getByRole("textbox",{name:'Enter Name'});

    await expect(textBox).toBeVisible();
    await expect(textBox).toBeEnabled();


    const maxLength:string | null =await textBox.getAttribute("maxlength"); // returns value of the maxlength attribute of the element
    expect(maxLength).toBe('15');

    await textBox.fill("Raj Kumar");

    //console.log("Text content of firstName:",await textBox.textContent()); // returns empty 
    const enteredValue:string = await textBox.inputValue();
    console.log("Input value of firstName:",await textBox.inputValue()); // returns  the input value of the text box
    expect(enteredValue).toBe("Raj Kumar"); 

});

// test.only  it will run only this particular test
test("Radio Button Actions",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForLoadState()

    // Radio button

    const maleRadio:Locator = page.locator("#male");
    
    await expect(maleRadio).toBeVisible();
    await expect(maleRadio).toBeEnabled();
    expect(await maleRadio.isChecked()).toBe(false);

    await maleRadio.check() // select radio button
    //expect(await maleRadio.isChecked()).toBe(true);
    await expect(maleRadio).toBeChecked();   // mostly preferable
    
});

test.only("Check Box Actions",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    // 1. Select specific checkbox (Sunday) using getByLabel  and assert

    const sundayCheckbox:Locator = page.getByLabel("Sunday");
    //await sundayCheckbox.check();
    //await expect(sundayCheckbox).toBeChecked();

    // 2. Select all checkboxes  and assert each is checked
    const days:string[] = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    const checkboxes:Locator[] = days.map(index=>page.getByLabel(index));
    expect(checkboxes.length).toBe(7);


/*     // 3. Select all checkboxes and assert each is checked
    for(const checkbox of checkboxes){
        await checkbox.check();
        await expect(checkbox).toBeChecked();

    }
    await page.waitForTimeout(2000);  */



    // 4. Uncheck last 3 checkboxes and assert
/*     for(const checkbox of checkboxes.slice(-3)){
        await checkbox.uncheck();
        await expect(checkbox).not.toBeChecked();

    }
    await page.waitForTimeout(2000);  */


    // 5.  Toggle checkboxes: if checked, uncheck; if unchecked check. Assert state flipped.
        // only if not checked
/*     for(const checkbox of checkboxes){

        if(await checkbox.isChecked()){
            // only if checked.
            await checkbox.uncheck();
            await expect(checkbox).not.toBeChecked();
        }else{
            // only if not checked.
            await checkbox.check();
            await expect(checkbox).toBeChecked();
        }
    }

    await page.waitForTimeout(2000); */

    // 6.  Randomely select  check boxes - Select checkboxes by index (1,3,6) and assert

/*     const indexes:number[]=[1,3,6];

    for (const i of indexes){
        await checkboxes[i].check();
        await expect(checkboxes[i]).toBeChecked();
        
    }

    await page.waitForTimeout(2000); */

    // 7. Select the check box based on the Label
    const weekName:string="Friday";
    for(const label of days){
        if(label.toLowerCase()===weekName.toLowerCase()){
            const checkbox =  page.getByLabel(label);
            await checkbox.check();
            await expect(checkbox).toBeChecked();
        }

    }








});
