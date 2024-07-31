import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://github.com/BakkappaN');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByLabel('Username or email address').fill('raees.net@hotmail.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('dsfegr');
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  await expect(page.getByRole('alert')).toContainText('Incorrect username or password.');
});