import{test,expect, Locator} from '@playwright/test'

/* test("verify xpath demo in playwright",async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");
    await page.waitForLoadState();

    // 1. Absolute xpath
    // when you provide absolute xpath use in quotes (xpath=absolutexpath or //) 


    const absolute_logo:Locator = page.locator("//html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/a[1]/img[1]");
    await expect(absolute_logo).toBeVisible();

    // 2. Relative xpath
    const relative_logo:Locator= page.locator("//img[@alt='Tricentis Demo Web Shop']");
    expect(relative_logo).toBeVisible();

    //3. contains()
    const products:Locator = page.locator("//h2/a[contains(@href,'computer')]");
    const products_count:number = await products.count();
    console.log('No of Computer related products:',products_count);
    expect(products_count).toBeGreaterThan(0);

    //console.log(await products.textContent());  // Error : strict mode violation

    console.log("First computer related product:",await products.first().textContent());
    console.log("last computer related product:",await products.last().textContent());
    console.log("Nth computer related product:",await products.nth(1).textContent()); // Indexing is starting from 0(zero)



   let productTitles:string[] = await products.allInnerTexts(); // getting all the  matched products in to an array
       console.log("All computer related products:",productTitles);

    for(let pt of productTitles){
        console.log(pt);
    }

    // 4. starts-with() 

    const buildInProducts:Locator=page.locator("//h2/a[starts-with(@href,'/build')]"); // returns multiple elements
    const count:number = await buildInProducts.count();
    expect(count).toBeGreaterThan(0);

    // 5. text() .
    const regLink:Locator = page.locator("//a[text()='Register']");  // //a[text()='Register'] or //a[.='Register'] or //a[normalize-space()='Register']
    await expect(regLink).toBeVisible();

    // 6. last()
    
    const lastItem:Locator = page.locator("//div[@class='column follow-us']//li[last()]"); // //div[@class='column follow-us']//li[5] or //div[@class='column follow-us']//li[position()=5]
    await expect(lastItem).toBeVisible();
    console.log("Text content of last item:",lastItem);

    // 7. position()=number(position()=1)  //div[@class='column follow-us']//li[position()=3]

    const positionItem:Locator = page.locator("//div[@class='column follow-us']//li[position()=3]");
    await expect(positionItem).toBeVisible();
    console.log("Text content of positional element:",positionItem);
 

}); */

test("Verify the CSS for the elements",async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");
    await page.waitForLoadState();

    const CSS_logo:Locator = page.locator("img[alt='Tricentis Demo Web Shop']");
    await expect(CSS_logo).toBeVisible();

    // 2. Relative xpath
/*     const relative_logo:Locator= page.locator("//img[@alt='Tricentis Demo Web Shop']");
    expect(relative_logo).toBeVisible(); */

    //3. contains()
    const products:Locator = page.locator("h2 a[href*='computer']");
    const products_count:number = await products.count();
    console.log('No of Computer related products:',products_count);
    expect(products_count).toBeGreaterThan(0);

    //console.log(await products.textContent());  // Error : strict mode violation

    console.log("First computer related product:",await products.first().textContent());
    console.log("last computer related product:",await products.last().textContent());
    console.log("Nth computer related product:",await products.nth(1).textContent()); // Indexing is starting from 0(zero)



   let productTitles:string[] = await products.allInnerTexts(); // getting all the  matched products in to an array
       console.log("All computer related products:",productTitles);

    for(let pt of productTitles){
        console.log(pt);
    }

    // 4. starts-with() 

    const buildInProducts:Locator=page.locator("h2 a[href^='/build']"); // returns multiple elements
    const count:number = await buildInProducts.count();
    expect(count).toBeGreaterThan(0);

    // 5. text() .  in playwright using tag:has-text('')

    const regLink:Locator = page.locator("a:has-text('Register')");  // //a[text()='Register'] or //a[.='Register'] or //a[normalize-space()='Register']
    await expect(regLink).toBeVisible();

    // 6. in xpath this last()
    //  this is css for the last :last-child
    
    const lastItem:Locator = page.locator("div.column.follow-us li:last-child"); // //div[@class='column follow-us']//li[5] or //div[@class='column follow-us']//li[position()=5]
    await expect(lastItem).toBeVisible();
    console.log("Text content of last item:",lastItem);

    // 7. position()=number(position()=1)  //div[@class='column follow-us']//li[position()=3]
    // in css use :nth-child(positionNumber)
    const positionItem:Locator = page.locator("div.column.follow-us li:nth-child(3)");
    await expect(positionItem).toBeVisible();
    console.log("Text content of positional element:",positionItem);
});