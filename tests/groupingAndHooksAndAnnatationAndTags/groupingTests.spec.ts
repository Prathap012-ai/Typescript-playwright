import{test,expect} from '@playwright/test';

// To run specific Groups -- npx playwright test tests/filename.spec.ts --grep Group1

test.describe("Group1",()=>{
    test("Test1",async()=>{
    console.log("This is Test1");
    });

    test("Test2",async()=>{
    console.log("This is Test2");
    });

});



test.describe("Group2",()=>{
    test("Test3",async()=>{
    console.log("This is Test3");
    });

    test("Test4",async()=>{
    console.log("This is Test4");
    });

});



