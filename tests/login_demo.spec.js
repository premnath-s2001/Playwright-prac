import { test, expect } from "@playwright/test";

test("demo login test 1", async ({ page }) => {
  await page.goto("https://demo.applitools.com/");
  await page.pause();

  await page.getByPlaceholder("Enter your username").fill("name");
  await page.getByPlaceholder("Enter your username").fill("pass");

  await page.getByRole("link", { name: "Sign in" }).click();
});

test.only("Login demo test 2", async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com");
  await page.pause();
  await page.locator('[placeholder="Username"]').fill("Admin");
  await page.locator('[placeholder="Password"]').fill("admin123");
  await page.locator('button:has-text("Login")').click();
  await page.getByText("helan POL").click();
  await page.locator("text=Logout").click();
  await page.close();
});
