
import{test,expect} from '@playwright/test'
test("Handling frames",async({page})=>{

    await page.goto("https://ui.vision/demo/webtest/frames/");

    // total number of frames present on the page.
    const frames= page.frames();
    console.log("Number of frames:",frames.length)


    // using Approach 1 using frame()-------------
    const frame1 = page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1"});
    if(frame1){
        await frame1.locator("[name='mytext1']").fill("frame1");
        await expect(frame1.locator("[name='mytext1']")).toHaveValue("frame1");
        const childFrames = frame1.childFrames();
        console.log("Number of child frames in frame1:",childFrames.length)
        
    }else{
        console.log("frame1 is not found.....")
    }
    await page.waitForTimeout(2000);


    const frame2 = page.frame({url:"https://ui.vision/demo/webtest/frames/frame_2"});
    if(frame2){
        await frame2.locator("[name='mytext2']").fill("frame2");
        await expect(frame2.locator("[name='mytext2']")).toHaveValue("frame2");
        const childFrames = frame2.childFrames();
        console.log("Number of child frames in frame2:",childFrames.length)
        
    }else{
        console.log("frame2 is not found.....")
    }
    await page.waitForTimeout(2000);

    const frame3 = page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3"});
    if(frame3){
        await frame3.locator("[name='mytext3']").fill("frame3");
        await expect(frame3.locator("[name='mytext3']")).toHaveValue("frame3");
        const childFrames = frame3.childFrames();
        console.log("Number of child frames in frame3:",childFrames.length)
   
    }else{
        console.log("frame3 is not found.....")
    }
    await page.waitForTimeout(2000);

    const frame4 = page.frame({url:"https://ui.vision/demo/webtest/frames/frame_4"});
    if(frame4){
        await frame4.locator("[name='mytext4']").fill("frame4");
        await expect(frame4.locator("[name='mytext4']")).toHaveValue("frame4");
        const childFrames = frame4.childFrames();
        console.log("Number of child frames in frame4:",childFrames.length)
        
    }else{
        console.log("frame4 is not found.....")
    }









    // ---------- Approach 2 using frameLocator() -----------

/*     const frame1 = page.frameLocator("[src='frame_1.html']").locator("[name='mytext1']");//getByRole("textbox")
    await frame1.fill("frame1")
    console.log(await frame1.inputValue());
    await expect(frame1).toHaveValue("frame1");

    await page.waitForTimeout(2000);

    const frame2 = page.frameLocator("[src='frame_2.html']").locator("[name='mytext2']");//getByRole("textbox")
    await frame2.fill("frame2")
    console.log(await frame2.inputValue());
    await expect(frame2).toHaveValue("frame2");

    await page.waitForTimeout(2000);

    const frame3 = page.frameLocator("[src='frame_3.html']").locator("[name='mytext3']");//getByRole("textbox")
    await frame3.fill("frame3")
    console.log(await frame3.inputValue());
    await expect(frame3).toHaveValue("frame3");

    await page.waitForTimeout(2000);

    const frame4 = page.frameLocator("[src='frame_4.html']").locator("[name='mytext4']");//getByRole("textbox")
    await frame4.fill("frame4")
    console.log(await frame4.inputValue());
    await expect(frame4).toHaveValue("frame4"); */



});



test.only("Handling inner frame",async({page})=>{

    await page.goto("https://ui.vision/demo/webtest/frames/");

    // total number of frames present on the page.
    const frames= page.frames();
    console.log("Number of frames:",frames.length)


    // using Approach 1 using frame()-------------

    const frame3 = page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3"});
    if(frame3){
        await frame3.locator("[name='mytext3']").fill("frame3");
        await expect(frame3.locator("[name='mytext3']")).toHaveValue("frame3");
        const childFrames = frame3.childFrames();
        console.log("Number of child frames in frame3:",childFrames.length)
        // innerFrame
        const thirdFrame = childFrames[0];
        // Text that you want to select
        const targetText = "Other:";
        const inputText = "My custom answer";
        // without loop to pass the target text into locator
       // await thirdFrame.getByRole("radio", { name: targetText }).click();

       // Capture all radio buttons
       const allRadioBtns = await thirdFrame.locator(".nWQGrd div[role='radio']").all();

       // Loop through all radio buttons
       for(const rd of allRadioBtns){
            const rdText = await rd.getAttribute('aria-label');
            console.log("Radio text:", rdText);
            // Normal radio buttons
            if (rdText === targetText) {

                await rd.click();
                break;
            }

            // Other: radio button
            if (targetText === "Other:" && rdText === null) {
                await rd.click();
                await thirdFrame.locator("input[jsname='YPqjbf']").fill(inputText);
                break;

            }
        }

    }else{
        console.log("frame3 is not found.....")
    }    
    await page.waitForTimeout(3000);
    
});