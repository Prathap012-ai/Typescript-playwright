import { test, expect } from '@playwright/test';

// beforeAll() method will execute once After starting the test 
test.beforeAll("Before all",async()=>{
    console.log("this is before all method")
});


// afterAll() method will execute once after finish the test
test.afterAll("After all",async()=>{
    console.log("this is after all method")
});


// beforeEach method will run before the  test begins
test.beforeEach("Before Each",async()=>{
    console.log("this is before each");
});

// afterEach method will runs after the test finish
test.afterEach("After Each",async()=>{
    console.log("this is after each");
});



test("Test1", async () => {
    console.log("This is Test1");
});

test("Test2", async () => {
    console.log("This is Test2");
});

test("Test3", async () => {
    console.log("This is Test3");
});

test("Test4", async () => {
    console.log("This is Test4");
});