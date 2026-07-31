const { test, expect } = require('@playwright/test');

const SITE_URL = 'https://teachright.netlify.app';

test('Homepage loads successfully', async ({ page }) => {
  await page.goto(SITE_URL);
  await expect(page).toHaveTitle(/TeachRight/);
});

test('Sign-in form is visible', async ({ page }) => {
  await page.goto(SITE_URL);
  await expect(page.getByText('Sign In to TeachRight')).toBeVisible();
  await expect(page.getByPlaceholder('Email Address')).toBeVisible();
  await expect(page.getByPlaceholder('Password')).toBeVisible();
});

test('Sign-up link is visible and clickable', async ({ page }) => {
  await page.goto(SITE_URL);
  const signUpLink = page.getByText('Create one here');
  await expect(signUpLink).toBeVisible();
  await signUpLink.click();
  await expect(page.getByText('Create Your Teacher Account')).toBeVisible();
});
