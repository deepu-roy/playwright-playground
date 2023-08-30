const { test, expect } = require('@playwright/test');

test('Login and Logout Test', async ({ page }) => {
  // Configure the view port to be 1920x1080
  await page.setViewportSize({ width: 1920, height: 1080 });

  // Navigate to https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // Enter "Admin" in input field with placeholder "Username"
  await page.getByPlaceholder('Username').type('Admin');

  // Enter "admin123" in input field with placeholder "Password"
  await page.getByPlaceholder('Password').type('admin123');

  // Click the button with label "Login"
  await page.locator('button:text("LOGIN")').click();

  // Check if the current url contains "dashboard"
  expect(page.url()).toContain('dashboard');
  
  // Click on locator "li.oxd-userdropdown" to open the user menu
  await page.locator('li.oxd-userdropdown').click();

  // Click on link "Logout"
  await page.locator('a:text("Logout")').click();
});