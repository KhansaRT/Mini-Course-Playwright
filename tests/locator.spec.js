// @ts-check
import { test, expect } from '@playwright/test';

test('Testcase Login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

// input username
  const inputUsername = page.locator('#user-name');
  await inputUsername.fill('standard_user');
  await expect(inputUsername).toHaveValue('standard_user');

// input password
  const inputPass = page.locator('#password');
  await inputPass.fill('secret_sauce');
  await expect(inputPass).toHaveValue('secret_sauce');

// click login button
  const buttonLogin = page.locator('#login-button');
  await buttonLogin.click();
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

// add product to cart
  const addProduct1 = page.locator('#add-to-cart-sauce-labs-backpack');
  const addProduct2 = page.locator('#add-to-cart-sauce-labs-bike-light');
  await addProduct1.click();
  await addProduct2.click();

// direct to cart page
  const buttonCart = page.locator('#shopping_cart_container');
  await buttonCart.click();
  await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');

// click check out button
  const buttonCheckout = page.locator('#checkout');
  await buttonCheckout.click();
  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');

// do check out steps (fill data until final check out)
  const inputFirstname = page.locator('#first-name');
  await inputFirstname.fill('Khansa');
  await expect(inputFirstname).toHaveValue('Khansa');
  
  const inputLastname = page.locator('#last-name');
  await inputLastname.fill('Rafifah Taqiyyah');
  await expect(inputLastname).toHaveValue('Rafifah Taqiyyah');
  
  const inputPostCode = page.locator('#postal-code');
  await inputPostCode.fill('34567');
  await expect(inputPostCode).toHaveValue('34567');
  
  const buttonContinue = page.locator('#continue');
  await buttonContinue.click();
  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');

  const buttonFinish = page.locator('#finish');
  await buttonFinish.click();
  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html');
  
})