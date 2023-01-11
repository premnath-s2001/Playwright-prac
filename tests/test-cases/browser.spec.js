import { test, expect } from "@playwright/test";

test("slider", async ({ page }) => {
  await page.goto("https://chakra-ui.com/docs/components/slider/usage");

  await page.pause();
  const source = page.getByRole("slider", { name: "slider-ex-1" });
  const target = page.locator(".chakra-slider").first();

  await source.dragTo(target);

  await page.goto(
    "https://getbootstrap.com/docs/5.3/components/navs-tabs/#tabs"
  );
  await page.pause();
  await page
    .locator(
      "div:nth-child(23) > .bd-example > .nav > li:nth-child(2) > .nav-link"
    )
    .click();
  await page
    .locator(
      "div:nth-child(23) > .bd-example > .nav > li:nth-child(3) > .nav-link"
    )
    .click();
  await page
    .locator(
      "div:nth-child(26) > .bd-example > .nav > li:nth-child(2) > .nav-link"
    )
    .click();

  await page.goto(
    "https://getbootstrap.com/docs/5.3/forms/checks-radios/#disabled"
  );
  await page.pause();
  await expect(page.locator("#flexCheckDisabled")).toBeDisabled();
});

test("forms", async ({ page }) => {
  await page.goto(
    "https://chakra-ui.com/docs/components/form-control/usage#usage-with-form-libraries"
  );

  await page.pause();
  await page.locator('input[name="name"]').click();
  await page.locator('input[name="name"]').fill("");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(
    page.locator('[id="field-\\:rb\\:-feedback"]'),
    "Name is required"
  ).toBeVisible();

  await page.getByPlaceholder("First name").click();
  await page.locator('input[name="name"]').fill("naruto");
  await page.getByRole("button", { name: "Submit" }).click();
});

test("buttons state", async ({ page }) => {
  await page.goto(
    "https://getbootstrap.com/docs/5.3/components/buttons/#examples"
  );

  await page.pause();
  await page.getByRole("button", { name: "Custom button" }).first().isEnabled();
  await page
    .getByRole("button", { name: "Disabled toggle button" })
    .first()
    .isDisabled();
});
