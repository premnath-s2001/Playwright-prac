import { test, expect } from "@playwright/test";

test("input", async ({ page }) => {
  await page.goto(
    "https://getbootstrap.com/docs/5.3/forms/input-group/#basic-example"
  );
  await page.pause();
  await page.locator(".form-control").first().fill("name");
});

test("Sample Test", async ({ page }) => {
  await page.goto(
    "https://getbootstrap.com/docs/5.3/forms/checks-radios/#radios"
  );

  await page.pause();
  //search
  await expect(page.getByRole("button", { name: "Search" })).toBeVisible();
  //checkbox
  await expect(page.locator("#flexCheckChecked")).toBeChecked();
  //radio
  await expect(page.getByLabel("Default checked radio")).toBeChecked();
  //disabled check box
  await expect(page.locator('[id="defaultCheck2"]')).toBeDisabled();
});

test("caurosel", async ({ page }) => {
  await page.goto(
    "https://getbootstrap.com/docs/5.3/components/carousel/#events"
  );

  await page.pause();
  await page
    .locator("#carouselExampleDark")
    .getByRole("button", { name: "Next" })
    .click();
  await page
    .locator("#carouselExampleDark")
    .getByRole("button", { name: "Next" })
    .click();
});

test("modal", async ({ page }) => {
  await page.goto(
    "https://getbootstrap.com/docs/5.3/components/modal/#exampleModalPopovers"
  );

  await page.pause();
  await page.getByRole("button", { name: "Launch demo modal" }).first().click();
  await page
    .getByRole("dialog", { name: "Modal title" })
    .getByRole("button", { name: "Save changes" })
    .click();
  await page.getByRole("button", { name: "Close" }).nth(2).click();
});

test("accordian", async ({ page }) => {
  await page.goto("https://getbootstrap.com/docs/5.3/components/accordion/");

  await page.pause();
  await page
    .locator("#headingOne")
    .getByRole("button", { name: "Accordion Item #1" })
    .click();
  await page
    .locator("#headingTwo")
    .getByRole("button", { name: "Accordion Item #2" })
    .click();
  await page
    .locator("#headingTwo")
    .getByRole("button", { name: "Accordion Item #2" })
    .click();
  await page
    .locator("#headingThree")
    .getByRole("button", { name: "Accordion Item #3" })
    .dblclick();
});
