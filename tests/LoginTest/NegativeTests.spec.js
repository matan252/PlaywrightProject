import { test, expect } from "@playwright/test";
test("Trying to login to blocked account and different combination of failed logins when username/password invalid/null", async ({
  page,
}) => {
  await page.goto("https://www.saucedemo.com/");
  await expect(page.getByText("Swag Labs")).toBeVisible();
  await page.locator('[data-test="username"]').fill("locked_out_user");
  await page.locator('[data-test="password"]').fill("secret_sauce");
  await page.locator('[data-test="login-button"]').click();
  await expect(
    page.getByText("Epic sadface: Sorry, this user has been locked out.")
  ).toBeVisible();
  await page.locator('[data-test="password"]').fill("incorrect");
  await page.locator('[data-test="login-button"]').click();
  await expect(
    page.getByText(
      "Epic sadface: Username and password do not match any user in this service"
    )
  ).toBeVisible();
  await page.locator('[data-test="username"]').fill("incorrect");
  await page.locator('[data-test="password"]').fill("secret_sauce");
  await page.locator('[data-test="login-button"]').click();
  await expect(
    page.getByText(
      "Epic sadface: Username and password do not match any user in this service"
    )
  ).toBeVisible();
  await page.locator('[data-test="password"]').fill("incorrect");
  await page.locator('[data-test="login-button"]').click();
  await expect(
    page.getByText(
      "Epic sadface: Username and password do not match any user in this service"
    )
  ).toBeVisible();
  await page.locator('[data-test="username"]').fill("");
  await page.locator('[data-test="password"]').fill("secret_sauce");
  await page.locator('[data-test="login-button"]').click();
  await expect(
    page.getByText("Epic sadface: Username is required")
  ).toBeVisible();
  await page.locator('[data-test="username"]').fill("locked_out_user");
  await page.locator('[data-test="password"]').fill("");
  await page.locator('[data-test="login-button"]').click();
  await expect(
    page.getByText("Epic sadface: Password is required")
  ).toBeVisible();
  await page.locator('[data-test="username"]').fill("");
  await page.locator('[data-test="login-button"]').click();
  await expect(
    page.getByText("Epic sadface: Username is required")
  ).toBeVisible();
});
