const { test, expect } = require('@playwright/test');

test.describe('Menu Button Responsive Behavior', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:32034'); // Adjust if your dev server runs on a different port
  });

  test('Menu button is hidden on desktop view', async ({ page }) => {
    await page.setViewportSize({ width: 1024, height: 768 });
    const menuIcon = await page.locator('.menu-icon');
    await expect(menuIcon).toHaveCSS('display', 'none');
    const menuList = await page.locator('.menu-list');
    await expect(menuList).toBeVisible();
  });

  test('Menu button is visible on mobile view and toggles menu list', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    const menuIcon = await page.locator('.menu-icon');
    await expect(menuIcon).toHaveCSS('display', 'block');

    const menuList = await page.locator('.menu-list');
    await expect(menuList).toHaveCSS('display', 'none');

    // Click menu button to toggle menu list
    await menuIcon.click();
    await expect(menuList).toHaveCSS('display', 'flex');

    // Click again to hide menu list
    await menuIcon.click();
    await expect(menuList).toHaveCSS('display', 'none');
  });
});
