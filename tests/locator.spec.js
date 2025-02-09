// @ts-check
import { test, expect } from '@playwright/test';
const { default: checkoutActions } = require('../tests/pom/objectActions/checkoutActions');
const { default: loginActions } = require('../tests/pom/objectActions/loginActions');

test('Login', async ({ page }) =>{
  const objLogin = new loginActions(page);
  await objLogin.goto();
  await objLogin.Login();
});

test('Checkout', async({ page }) =>{
  const objCheckout = new checkoutActions(page);
  await objCheckout.goto();
  await objCheckout.Checkout();
});
