import { test } from "@playwright/test";
import { LoginPage } from "../pages/login";

test('Login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login(process.env.USERNAME!, process.env.PASSWORD!);
});

test('Logout', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.logout(process.env.USERNAME!, process.env.PASSWORD!);
});

test('Login fail', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.failLogin(process.env.USERNAME!, 'wrongPassword');
})