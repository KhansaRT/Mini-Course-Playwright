// @ts-check
import { test, expect } from '@playwright/test';
import CheckoutActions from './pom/objectActions/checkoutActions';
import checkoutActions from './pom/objectActions/checkoutActions';
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