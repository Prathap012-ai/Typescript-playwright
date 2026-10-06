import{test,expect, Locator}from '@playwright/test'

test("Handle assessment task for stackDemo application",async({page})=>{
    await page.goto("https://bstackdemo.com/#");
    let orderBy:Locator = page.getByRole("combobox");
    await expect(orderBy).toBeVisible();
    await expect(orderBy).toBeEnabled()
    await orderBy.selectOption({label:'Lowest to highest'});
    await page.waitForLoadState('load')
    
    //# retrieve the list of product price elements.
    await expect(page.locator(".products-found h3")).toBeVisible();
    const products:Locator = page.locator(".shelf-item .val");
    const products_text:string[]=(await products.allTextContents()).map(text=>text.trim())
    // console.log(products_text)
    
    //# retrieve the list of product name elements.
    const titles:Locator = page.locator(".shelf-item .shelf-item__title");
    const products_names:string[] = (await titles.allTextContents()).map(text=>text.trim());
    // console.log(products_names)

    // verify product names and their prices count are equal
    expect(products_names.length).toBe(products_text.length);

    // print each product name along with its corresponding price in the console.
    for( let i=0;i<products_names.length;i++){
        console.log(`${products_names[i]}: ${products_text[i]}`)
    }

    // Access the first element of the product price list and the first element of the product names list
    console.log(`first product name ${products_names[0]}, and price is ${products_text[0]}`);

    const newPrice:number[]=products_text.map(text=>parseFloat(text.replace("$","")));
    
    //print the lowest priced product name and its price in the console.
    const lowestPrice=Math.min(...newPrice);
    const lowestIndex=newPrice.indexOf(lowestPrice);

    console.log(`lowest product name ${products_names[lowestIndex]},and lowest price is ${products_text[lowestIndex]}`);

    // Access the last element of the product price list and the last element of the product names list
    const lastIndex= products_names.length-1;
    console.log(`last index of product title ${products_names[lastIndex]},and price is ${products_text[lastIndex]}`);
    //print the highest priced product name and its price in the console.

    const maxPrice=Math.max(...newPrice);
    const highestIndex=newPrice.indexOf(maxPrice);

    console.log(`highest product name ${products_names[highestIndex]}, and highest price is ${products_text[highestIndex]}`);

    console.log(`\nVerification - First product should have lowest price: ${newPrice[0]} == $${lowestPrice}: ${newPrice[0] === lowestPrice}`);

    console.log(`Verification - Last product should have highest price: ${newPrice[lastIndex]} == $${maxPrice}: ${newPrice[lastIndex] === maxPrice}`);









});