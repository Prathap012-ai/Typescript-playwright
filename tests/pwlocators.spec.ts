/*
Locator - Identifies the element o the page.
DOM - Document Object Model
DOM is an API Interface 

page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.(Non interactive elements)
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).

 */

import{test,expect, Locator}from '@playwright/test'

test("Verify Playwright Locators",async({page})=>{
    await page.goto("https://automationexercise.com/");
    // 1. getByAltText() identifies images(and similar elements) based on the alt attribute.
    // use this locator when your element supports alt text such as img and area elements.
    const logo:Locator = await page.getByAltText("Website for automation practice");
    await expect(logo).toBeVisible();


    // 2. page.getByText - Find an element by the text it contains. You can match by a substring,exact string,
    // Locate by visible text
    // Use this locator to find non interactive like div,span,p,etc..
    // For interactive elements like button,a,input,etc.. use role locators.

    //let text:Locator = page.getByText("Features Items");
    //await expect(text).toBeVisible();

   // await expect(page.getByText("Features Items")).toBeVisible(); // full string
    //await expect(page.getByText("Features")).toBeVisible();  // provided substring
    await expect(page.getByText(/features\s+Items/i)).toBeVisible();  // provided regular expression(/Welcome\s+To\s+Our\s+Store/i)
    
    // 3. page.getByRole() - Locating by role (role is not an attribute)
    // Role locators include buttons,checkboxes, headings,links lists,tables,
    // and many and follow W3C specifications for ARIA role.
    // Prefer for interactive elements like buttons,

    await page.getByRole('link',{name: "Products"}).click();
    await expect(page.getByRole('heading',{name:'Category'})).toBeVisible(); // you can also use getByText()

    // 4. page.getByLabel() - Locate form control by label's text
    // when to use : Ideal for form fields with visible labels.
    
    await page.goto("https://tutorialsninja.com/demo/");
    await page.waitForLoadState();
    await expect(page.locator("span:has-text('My Account')")).toBeVisible();
    await page.locator("span:has-text('My Account')").click();
    await page.getByRole("link", {name:"Register"}).click();
    expect(page.getByRole('heading',{name:'Register Account'})).toBeVisible();
    //page.getByLabel("Name:").type("John") // type is deprecated
    await page.getByLabel("First Name").fill("John");
    await page.getByLabel("Last Name").fill("kenedy");
    await page.getByLabel("E-Mail").fill("jon@gmailc.com");

    // 5. page.getByPlaceholder() -  Finds element with a given placeholder text.
    // best for inputs without label but having a placeholder.

    await page.getByPlaceholder('Search').fill('Computer');
    
    // 6 . page.getByTitle() - To locate an element by its title attribute.
    // when to use : When your element has a meaningful title attribute.

    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
    await page.waitForLoadState();

    //const link:Locator = page.getByTitle("Home page link")
    // await expect(link).toHaveText("Home");
    await expect(page.getByTitle("Home page link")).toHaveText("Home");
    await expect(page.getByTitle('HyperText Markup Language')).toHaveText('HTML');
    await expect(page.getByTitle("Tooltip text")).toHaveText("This text has a tooltip");

    // 7. page.getByTestId() - Locate an element based on its data-testid attribute (other attribute can be configured)
    // When to use : When text or role-based locators are unstable or not suitable.

    expect(page.getByTestId("profile-name")).toHaveText("John Doe");
    expect(page.getByTestId('profile-email')).toHaveText("john.doe@example.com");
    expect(page.getByTestId("edit-profile-btn")).toBeVisible();
    await page.getByTestId("edit-profile-btn").click();

    await page.close();
    





});
