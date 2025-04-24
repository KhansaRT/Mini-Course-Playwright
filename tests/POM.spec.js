// @ts-check
import { test, expect } from '@playwright/test';
const { default: loginActions } = require('./pom/objectActions/loginActions');
const { default: mainPageActions} = require('./pom/objectActions/mainPageActions');
const { default: checkoutActions } = require('./pom/objectActions/checkoutActions');


test('e2e checkout test running successfully ', async ({ page }) =>{
  // login scenario
  const objLogin = new loginActions(page);
  await objLogin.goto();
  await objLogin.Login();

  // Add to cart scenario
  const objaddToCart = new mainPageActions(page);
  await objaddToCart.AddToChart();
  await objaddToCart.MoveToCartPage();

  //Checkout scenario
  const objCheckout = new checkoutActions(page);
  await objCheckout.ClickCheckout();
  await objCheckout.CheckoutPage1();
  await objCheckout.CheckoutPage2();
});
