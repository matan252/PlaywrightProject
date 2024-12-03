import { test, expect } from "@playwright/test";

test.describe("Positive Login Tests Suite", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    await expect(page.getByText("Swag Labs")).toBeVisible();
  });

  test("log in as standard_user", async ({ page }) => {
    await page.locator('[data-test="username"]').fill("standard_user");
    await page.locator('[data-test="password"]').fill("secret_sauce");
    await page.locator('[data-test="login-button"]').click();
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    await expect(page.getByText("Products")).toBeVisible();
  });
  r;
  test("log in as problem_user", async ({ page }) => {
    await page.locator('[data-test="username"]').fill("problem_user");
    await page.locator('[data-test="password"]').fill("secret_sauce");
    await page.locator('[data-test="login-button"]').click();
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    await expect(page.getByText("Products")).toBeVisible();
  });

  test("log in as performance_glitch_user", async ({ page }) => {
    await page
      .locator('[data-test="username"]')
      .fill("performance_glitch_user");
    await page.locator('[data-test="password"]').fill("secret_sauce");
    await page.locator('[data-test="login-button"]').click();
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    await expect(page.getByText("Products")).toBeVisible();
  });

  test("log in as error_user", async ({ page }) => {
    await page.locator('[data-test="username"]').fill("error_user");
    await page.locator('[data-test="password"]').fill("secret_sauce");
    await page.locator('[data-test="login-button"]').click();
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    await expect(page.getByText("Products")).toBeVisible();
  });

  test("log in as visual_user", async ({ page }) => {
    await page.locator('[data-test="username"]').fill("visual_user");
    await page.locator('[data-test="password"]').fill("secret_sauce");
    await page.locator('[data-test="login-button"]').click();
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    await expect(page.getByText("Products")).toBeVisible();
  });
});
