import { expect, Locator, Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly loginInput: Locator;
  readonly passwordInput: Locator;
  readonly btnLogin: Locator;
  readonly loginAlert: Locator;
  readonly clickLogout: Locator;
  readonly selectLogout: Locator;
  readonly btnLogout: Locator;
  readonly successLogOut: Locator;
  readonly failedLogin: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginInput = page.locator('#id_login');
    this.passwordInput = page.locator('#id_password');
    this.btnLogin = page.locator('button[type="submit"]');
    this.loginAlert = page.locator('.alert.alert-success.alert-dismissible');
    this.clickLogout = page.locator('span.text-xs.block');
    this.selectLogout = page.locator('a[href="/accounts/logout/"]');
    this.btnLogout= page.locator('button.btn-danger');
    this.successLogOut = page.locator('div.alert');
    this.failedLogin = page.locator('div.alert-block.alert-danger');
  }
  
  async login(username: string, password: string) {
    await this.page.goto('/');
    await this.loginInput.fill(username);
    await this.passwordInput.fill(password);
    await this.btnLogin.click();
    await expect(this.loginAlert).toContainText(username);
  }

  async logout() {
    await this.clickLogout.click();
    await this.selectLogout.click();
    await this.btnLogout.click();
    await expect(this.successLogOut).toHaveClass('alert  alert-success alert-dismissible')
  }

  async failLogin(username: string, password: string) {
    await this.page.goto('/');
    await this.loginInput.fill(username);
    await this.passwordInput.fill(password);
    await this.btnLogin.click();
    await expect(this.failedLogin).toBeVisible();
  }
}
