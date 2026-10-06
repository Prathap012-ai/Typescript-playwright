import { test, expect } from '@playwright/test';

// beforeEach method will run before the  test begins

test.beforeEach("Before Each",async()=>{
    console.log("This is before each method");
});

// afterEach method will runs after the test finish
test.afterEach("after Each",async()=>{
    console.log("This is after each method");
});


// beforeAll() method will execute once After starting the test 
test.beforeAll("Before all",async()=>{
    console.log("This is before all method");
});

// afterAll() method will execute once after finish the test
test.afterAll("After all",async()=>{
    console.log("This is after all method");
});

test("Test1", async () => {
    console.log("This is test1 function")
});

test("Test2", async () => {
    console.log("This is test2 function")
});

test("Test3", async () => {
    console.log("This is test3 function")
});

test("Test4", async () => {
    console.log("This is test4 function")
});