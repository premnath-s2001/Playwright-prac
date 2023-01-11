// const { test, expect } = require("@playwright/test");
// const { hello, hello_world } = require("./demo/hello");

// console.log(hello());

// //to creare test
// test("first test", async ({ page }) => {
//   await page.goto("https://www.saucedemo.com/");
//   await page.pause();
//   //using object selector
//   await page.click("id=user-name");
//   await page.locator("id=password").click();
//   //using css selector
//   await page.locator("#login-button").click();
//   //using x-path
//   await page.locator('xpath=//input[@name="password"]').fill("name");
//   //using text
//   await page.locator("text=LOGIN").click();
//   await page.locator('input:has-text("LOGIN")').click();
// });
