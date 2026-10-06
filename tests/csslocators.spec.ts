/* 
CSS (Cascading Style sheets)
2 Types of css locators

1) absolute CSS selector
2)relative CSS selector

tag with id                         tag#id  or    #id
tag with class                      tag.classname  or   .class
tag with any other attribute        tag[attribute=value]  or   [attribute=value]
tag with class and attribute        tag.class[attribute=value]  or  .class[attribute=value]

page.locator(css/xpath)

*/

import{test,expect,Locator} from '@playwright/test'

test("Handle the CSS locators",async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");

    // tag#id

/*     const searchBox:Locator =page.locator("input#small-searchterms");
    await searchBox.fill("T-shirts"); */
    
    //await expect(page.locator("input#small-searchterms")).toBeVisible();
    // await page.locator("input#small-searchterms").fill("T-shirts");
    //await page.locator("#small-searchterms").fill("T-shirts");
    
    // tag.class

    //await page.locator("input.search-box-text.ui-autocomplete-input").fill("T-shirts");
     //await page.locator(".search-box-text.ui-autocomplete-input").fill("T-shirts");

     //tag[attribute=value]
     //await page.locator("input[name=q]").fill("T-shirts");
    //await page.locator("[name=q]").fill("T-shirts");

    // tag.class[attribute=value]
    await page.locator("input.search-box-text[value='Search store']").fill("T-shirts");
    //await page.locator(".search-box-text[value='Search store']").fill("T-shirts");







});

