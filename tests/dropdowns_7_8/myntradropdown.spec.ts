import{test,expect, Locator}from '@playwright/test'

test("Verify auggestion dropdowns",async({page})=>{
    await page.goto("https://www.myntra.com/");

    const searchBox:Locator = page.getByRole("textbox", {name:"Search for products, brands and more"});
    await expect(searchBox).toBeVisible();
    await expect(searchBox).toBeEnabled();
    await searchBox.pressSequentially("mobiles");

    // capture all the options from dropdown and count
    const options:Locator = page.locator("ul.desktop-group>li");
    await options.first().waitFor({state:"visible",timeout:3000});
    const count:number = await options.count();
    console.log("Number of options: ",count);

    // print all the options
    for(let i=0;i<count;i++){
        console.log(await options.nth(i).innerText())
    }
    
    // select / click on option
        for(let i=0;i<count;i++){
        const text=await options.nth(i).innerText();
        if (text==="Samsung Mobiles"){
            await options.nth(i).click();
            break;
        }
    }





    await page.waitForTimeout(3000);




});