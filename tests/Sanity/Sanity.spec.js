import {test, expect} from '@playwright/test'

// 1. You don't user test.describe as a test suite/set as i asked.
// 2. Where is the pre-condition? (beforeEach hook)

test('Ordering 2 items from the shop and doing checkout', async ({page}) => {
    await page.goto('https://www.saucedemo.com/')
    await expect(page.getByText('Swag Labs')).toBeVisible()
    await page.locator('[data-test="username"]').fill('standard_user')
    await page.locator('[data-test="password"]').fill('secret_sauce')
    await page.locator('[data-test="login-button"]').click()
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
    await expect(page.getByText('Products')).toBeVisible()
    await page.getByText('Sauce Labs Backpack').click()
    await page.locator('[data-test="add-to-cart"]').click()
    await page.locator('[data-test="back-to-products"]').click()
    await page.getByText('Sauce Labs Bike Light').click()
    await page.locator('[data-test="add-to-cart"]').click()
    await expect(page.locator('.shopping_cart_badge')).toHaveText('2')
    await page.locator('[data-test="shopping-cart-link"]').click()
    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html')
    await expect(page.getByText('Your Cart')).toBeVisible()
    // Where is the validation for the amount of products present in the cart overview page?
    await page.locator('[data-test="checkout"]').click()
    await expect(page).toHaveURL(
        'https://www.saucedemo.com/checkout-step-one.html',
    )
    await expect(page.getByText('Checkout: Your Information')).toBeVisible()
    await page.locator('[data-test="firstName"]').fill('matan')
    await page.locator('[data-test="lastName"]').fill('rushdi')
    await page.locator('[data-test="postalCode"]').fill('54321542')
    await page.locator('[data-test="continue"]').click()
    await expect(page).toHaveURL(
        'https://www.saucedemo.com/checkout-step-two.html',
    )
    await expect(page.getByText('Checkout: Overview')).toBeVisible()
    await page.locator('[data-test="finish"]').click()
    await expect(page).toHaveURL(
        'https://www.saucedemo.com/checkout-complete.html',
    )
    await expect(page.getByText('Checkout: Complete!')).toBeVisible()
    await expect(page.getByText('Thank you for your order!')).toBeVisible()
    await expect(
        page.getByText(
            'Your order has been dispatched, and will arrive just as fast as the pony can get there!',
        ),
    ).toBeVisible()
})
