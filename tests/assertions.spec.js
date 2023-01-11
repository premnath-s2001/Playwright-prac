import { test, expect } from "@playwright/test";

test("assertions", async ({ page }) => {
  await page.goto("https://kitchen.applitools.com/");

  await page.pause();

  await expect(page.locator("text=The Kitchen")).toHaveCount(1);

  await expect(page.locator("text=The Kitchen")).toBeVisible();
  await expect.soft(page.locator("text=The Kitchen")).toBeHidden();

  await expect(page.locator("text=The Kitchen")).toHaveAttribute(
    "class",
    /.*css-dpmy2a/
  );
  await expect(page.locator("text=The Kitchen")).toHaveClass(/.*css-dpmy2a/);
});
