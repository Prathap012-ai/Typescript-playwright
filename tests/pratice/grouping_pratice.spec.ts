import {test,expect} from '@playwright/test';

/*  For grouping use syntax:
test.describe("Title",()=>{
    statements
    });

For running the command is :' npx playwright test tests/filename.spec.ts --grep groupName '

*/
test.describe("Group1",()=>{

    test("Test1",async()=>{
        console.log("This is test1 function")
    });

    test("Test2",async()=>{
        console.log("This is test2 function")
    });

});


test.describe("Group2",()=>{

    test("Test3",async()=>{
        console.log("This is test3 function")
    });

    test("Test4",async()=>{
        console.log("This is test4 function")
    });

});


test.describe("Group3",()=>{
    test("Test5",async()=>{
        console.log("This is test5 function")
    });

    test("Test6",async()=>{
        console.log("This is test6 function")
    });

});


test.describe("Group4",()=>{
    test("Test7",async()=>{
        console.log("This is test7 function")
    });

    test("Test8",async()=>{
        console.log("This is test8 function")
    });

});
