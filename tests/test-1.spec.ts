import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://example.com/');
  await page.getByRole('heading', { name: 'Example Domain' }).click();
  await page.getByRole('heading', { name: 'Example Domain' }).click();

  await page.goto('https://example.com/');
  await page.goto('https://www.iana.org/help/example-domains');
  await page.goto('https://example.com/');
  await page.getByRole('link', { name: 'More information...' }).click({
    button: 'right'
  });
  await page.locator('p').filter({ hasText: 'More information...' }).click();
});