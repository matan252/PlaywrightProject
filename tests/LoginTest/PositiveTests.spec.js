import {test, expect} from '@playwright/test'

// 1. You don't user test.describe as a test suite/set as i asked.
// 2. Where is the pre-condition? (beforeEach hook)

const loginID = [
    'standard_user',
    'problem_user',
    'performance_glitch_user',
    'error_user',
    'visual_user',
]
// 1. why you using this for loop if you don't want to control the loop start and stop points? use "for of" loop please.
// 2. In addition you need to put the loop outside the test. this called "Test Parameterized" and if you trying to use it. there is a reference to the Playwright docs that explain how to do it right.

test('login into different validate accounts using array', async ({page}) => {
    for (let i = 0; i < 5; i++) {
        await page.goto('https://www.saucedemo.com/')
        await expect(page.getByText('Swag Labs')).toBeVisible()
        await page.locator('[data-test="username"]').fill(loginID[i])
        await page.locator('[data-test="password"]').fill('secret_sauce')
        await page.locator('[data-test="login-button"]').click()
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
        await expect(page.getByText('Products')).toBeVisible()
    }
})
