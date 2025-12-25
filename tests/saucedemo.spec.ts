import { test, expect } from '@playwright/test';

test.describe('SauceDemo E2E Scenario - QA Autónomo Demo', () => {

  test('should complete the SauceDemo purchase flow', async ({ page }) => {
    console.log('--- Demo Step 1: Initial Navigation and Login ---');

    // Go to the SauceDemo login page
    // Note: The original prompt used a google redirect URL.
    // For a direct Playwright script, navigating directly is standard.
    await page.goto('/');

    // Set viewport size for better visibility, mimicking "maximize"
    await page.setViewportSize({ width: 1920, height: 1080 });

    console.log('Logging in...');
    await page.fill('[data-test="username"]', 'standard_user');
    await page.fill('[data-test="password"]', 'secret_sauce');
    await page.click('[data-test="login-button"]');

    await expect(page).toHaveURL(/.*inventory.html/);
    console.log('Login successful!');

    console.log('\n--- Demo Step 2: Business Logic (Sorting, Adding to Cart, Screenshot) ---');
    console.log('Sorting products by price (low to high)...');
    await page.locator('[data-test="product-sort-container"]').selectOption('lohi');

    console.log('Adding the two cheapest products to cart...');
    // Get all 'Add to cart' buttons after sorting
    const addToCartButtons = page.locator('.btn_primary.btn_inventory');
    await addToCartButtons.first().click(); // Click first cheapest
    await addToCartButtons.nth(1).click(); // Click second cheapest
    console.log('Two cheapest products added to cart.');

    console.log('Navigating to cart and taking screenshot...');
    await page.locator('.shopping_cart_link').click();
    await expect(page).toHaveURL(/.*cart.html/);
    await page.screenshot({ path: 'cart_items_screenshot.png' });
    console.log("Screenshot 'cart_items_screenshot.png' taken.");

    console.log('\n--- Demo Step 3: Report and Close ---');
    console.log('Proceeding to checkout...');
    await page.locator('[data-test="checkout"]').click();
    await expect(page).toHaveURL(/.*checkout-step-one.html/);

    console.log('Filling checkout form...');
    await page.fill('[data-test="firstName"]', 'Juan');
    await page.fill('[data-test="lastName"]', 'Perez');
    await page.fill('[data-test="postalCode"]', '12345');
    await page.locator('[data-test="continue"]').click();
    await expect(page).toHaveURL(/.*checkout-step-two.html/);
    console.log('Checkout form filled.');

    console.log('Finishing purchase...');
    await page.locator('[data-test="finish"]').click();
    await expect(page).toHaveURL(/.*checkout-complete.html/);

    const successMessage = await page.locator('.complete-header').textContent();
    expect(successMessage).toContain('Thank you for your order!');
    console.log(`Purchase successful! The message on screen is: '${successMessage}'`);

    console.log('\nDemo scenario completed.');
  });
});
