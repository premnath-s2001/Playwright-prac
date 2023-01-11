import { test, expect } from "@playwright/test";

test.describe("all tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    await page.pause();

    await page.locator('[data-test="username"]').click();
    const name = await page
      .locator('[data-test="username"]')
      .fill("standard_user");
    await page.locator('[data-test="password"]').click();
    const password = await page
      .locator('[data-test="password"]')
      .fill("secret_sauce");

    await page.locator('[data-test="login-button"]').click();

    //   await page.close();
  });

  test.afterAll(async ({ page }) => {
    await page.close();
  });

  test("hooks @home", async ({ page }) => {
    await page
      .locator('[data-test="add-to-cart-sauce-labs-bike-light"]')
      .click();
    await page
      .getByText(
        "Sauce Labs Backpackcarry.allTheThings() with the sleek, streamlined Sly Pack tha"
      )
      .click();
    await page
      .getByRole("link", { name: "Sauce Labs Backpack" })
      .filter({ hasText: "Sauce Labs Backpack" })
      .click();
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    //   await page.close();
  });

  test("hooks @logout", async ({ page }) => {
    await page.getByRole("button", { name: "Open Menu" }).click();
    await page.getByRole("link", { name: "Logout" }).click();

    //   await page.close();
  });
});

test("login", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  await page.pause();

  await page.locator('[data-test="login-button"]').click();
  await expect(
    page
      .locator("form div")
      .filter({ hasText: "Epic sadface: Username is required" })
  ).toBeVisible();
});
