import { test, expect } from "@playwright/test";
const loginID = [
  "standard_user",
  "problem_user",
  "performance_glitch_user",
  "error_user",
  "visual_user",
];
test("login into different validet accounts using array", async ({ page }) => {
  for (let i = 0; i < 5; i++) {
    await page.goto("https://www.saucedemo.com/");
    await expect(page.getByText("Swag Labs")).toBeVisible();
    await page.locator('[data-test="username"]').fill(loginID[i]);
    await page.locator('[data-test="password"]').fill("secret_sauce");
    await page.locator('[data-test="login-button"]').click();
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    await expect(page.getByText("Products")).toBeVisible();
  }
});
