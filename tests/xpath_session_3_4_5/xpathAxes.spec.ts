import{test,expect,Locator}from '@playwright/test'
test("Handle xpathAxes Demo ",async({page})=>{
    await page.goto("https://www.w3schools.com/html/html_tables.asp");

    // 1. self axis - Select<td> element that contains "Germany"
    const GermanyCell:Locator = page.locator("//td[text()='Germany']");
    await expect(GermanyCell).toBeVisible();

    // 2. parent axis - Get parent <tr> of the "Germany" cell
    const parentRow:Locator= page.locator("//td[text()='Germany']/parent::tr");
    //await expect(parentRow).toHaveCount(1);
    await expect(parentRow).toContainText("Maria Anders");
    //await expect(parentRow).toContainText("Alfreds Futterkiste");
    //await expect(parentRow).toContainText("Germany");
    console.log(await parentRow.textContent());
    //await expect(parentRow).toContainText("Alfreds Futterkiste Maria Anders 	Germany"); // working

    //3. child axis - Get all <td> children of the second <tr> in the table.
    const ChildCell:Locator = page.locator("//table[@id='customers']//tr[2]/child::td"); // returns multiple elements
    expect(ChildCell).toHaveCount(3);

    //4. ancestor axis - Get ancestor <table> of hte "Germany" cell
    const table:Locator = page.locator("//td[text()='Germany']/ancestor::table");
    expect(table).toHaveAttribute('id','customers');

    //5. descendant axis - Get all <td> elements under the table
    const allTds:Locator = page.locator("//table[@id='customers']/descendant::td");
    expect(allTds).toHaveCount(18);

    //6.following axis - Get the <td> that comes after "Germany" in document order
    const followingCell:Locator = page.locator("//td[text()='Germany']/following::td[1]");
    expect(followingCell).toHaveText("Centro comercial Moctezuma");

    //7.following-sibling -Get <td> to the right of "Germany"
    const followingSiblingCell:Locator = page.locator("//td[text()='Germany']/following-sibling::td[1]");
    expect(followingSiblingCell).toHaveCount(0);

    //8. preceding axis - Get the <td> just before "Germany"
    const preceding:Locator = page.locator("//td[text()='Germany']/preceding::td[1]");
    //expect(preceding).toHaveText("Alfreds Futterkiste")
    expect(preceding).toHaveText("Maria Anders");

    //9. preceding-sibling axis - Get <td> to the left of "Germany"
        const precedingCell:Locator = page.locator("//td[text()='Germany']/preceding-sibling::td");
        expect(precedingCell).toHaveCount(2);
        expect(precedingCell.nth(0)).toHaveText("Alfreds Futterkiste");
        expect(precedingCell.nth(1)).toHaveText("Maria Anders");







    

});