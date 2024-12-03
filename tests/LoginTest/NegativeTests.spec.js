import { test, expect } from "@playwright/test";
test.describe("Negative Login Tests Suite", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
  });

  test("Trying to log in with account that is locked out", async ({ page }) => {
    await page.locator('[data-test="username"]').fill("locked_out_user");
    await page.locator('[data-test="password"]').fill("secret_sauce");
    await page.locator('[data-test="login-button"]').click();
    await expect(
      page.getByText("Epic sadface: Sorry, this user has been locked out.")
    ).toBeVisible();
  });

  test("Trying to log in with incorrect password for correct log in", async ({
    page,
  }) => {
    await page.locator('[data-test="username"]').fill("standard_user");
    await page.locator('[data-test="password"]').fill("incorrect");
    await page.locator('[data-test="login-button"]').click();
    await expect(
      page.getByText(
        "Epic sadface: Username and password do not match any user in this service"
      )
    ).toBeVisible();
  });

  test("Trying to log in with incorrect username and correct password", async ({
    page,
  }) => {
    await page.locator('[data-test="username"]').fill("incorrect_user");
    await page.locator('[data-test="password"]').fill("secret_sauce");
    await page.locator('[data-test="login-button"]').click();
    await expect(
      page.getByText(
        "Epic sadface: Username and password do not match any user in this service"
      )
    ).toBeVisible();
  });

  test("Trying to log in with incorrect username and password", async ({
    page,
  }) => {
    await page.locator('[data-test="username"]').fill("incorrect");
    await page.locator('[data-test="password"]').fill("incorrect");
    await page.locator('[data-test="login-button"]').click();
    await expect(
      page.getByText(
        "Epic sadface: Username and password do not match any user in this service"
      )
    ).toBeVisible();
  });

  test("Trying to log in with empty username and correct password", async ({
    page,
  }) => {
    await page.locator('[data-test="username"]').fill("");
    await page.locator('[data-test="password"]').fill("secret_sauce");
    await page.locator('[data-test="login-button"]').click();
    await expect(
      page.getByText("Epic sadface: Username is required")
    ).toBeVisible();
  });

  test("Trying to log in with correct username empty password", async ({
    page,
  }) => {
    await page.locator('[data-test="username"]').fill("standard_user");
    await page.locator('[data-test="password"]').fill("");
    await page.locator('[data-test="login-button"]').click();
    await expect(
      page.getByText("Epic sadface: Password is required")
    ).toBeVisible();
  });

  test("Trying to log in with empty username and password", async ({
    page,
  }) => {
    await page.locator('[data-test="username"]').fill("");
    await page.locator('[data-test="password"]').fill("");
    await page.locator('[data-test="login-button"]').click();
    await expect(
      page.getByText("Epic sadface: Username is required")
    ).toBeVisible();
  });
});
