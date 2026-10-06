/* 
A Frame (short for "inline frame") is an HTML element that allows you to embed another HTML document within the current document.
Iframes are commonly used to embed external content such as video,maps,or other web pages (as seen here) into a web pages without affecting the parent document.

 */


import{test,expect} from '@playwright/test'
test("Handling frames",async({page})=>{

    await page.goto("https://ui.vision/demo/webtest/frames/");

    // total number of frames present on the page.
    const frames= page.frames();
    console.log("Number of frames:",frames.length)

/*     // ---- Approach 1: using page.frame()------

    const frame = page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1"});
    // await frame.locator("input[type='text']").fill("Hello");  //frame' is possibly 'null

    if(frame){  // frame is exist it work inside code otherwise it will print the else block
    
        await frame.locator("input[type='text']").fill("Hello");
        //await frame.fill("input[type='text']","Hello")
    }else{
        console.log("Frame is not available");
    }

    await page.waitForTimeout(5000); */



    // ------- Approach 2 : using frameLocator() -----
    const inputBox = page.frameLocator("[src='frame_1.html']").locator("input[type='text']");
    await inputBox.fill("John");

    await page.waitForTimeout(5000);






});




test.only("Inner/child frames",async({page})=>{

    await page.goto("https://ui.vision/demo/webtest/frames/");
    
    // frame 3
    const frame3 = page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3"});
    if(frame3){
        await frame3.locator("input[name='mytext3']").fill("Welcome");
        const childFrames = frame3.childFrames();
        console.log("Child frames inside the Frame 3:",childFrames.length);  // only one child frame 1
        const radioBtn = childFrames[0].getByLabel("I am a human");
        await radioBtn.check(); // select radio button
        await expect(radioBtn).toBeChecked(); // assertion


    }else{
        console.log("Frame 3 is not found......");
    }

    await page.waitForTimeout(3000);
});