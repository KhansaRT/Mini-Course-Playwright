// @ts-check
import { test, expect, request } from '@playwright/test';
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

test('contoh get', async ({ page }) => {
    const apiContext = await request.newContext();
    const res = await apiContext.get('https://reqres.in/api/users?page=2');
    expect(res.status()).toBe(200);
    const respondJSON = await res.json();
    expect(respondJSON.page).toBe(2);
    expect(respondJSON.total).toBe(12);
});

test('contoh post', async ({ page }) => {
    const apiContext = await request.newContext();
    const postData = {
      "name": "morpheus",
      "job": "leader"
    };
    const res = await apiContext.post('https://reqres.in/api/users', { 
        data : postData
    });
    expect(res.status()).toBe(201);
    const respondJSON = await res.json();
    expect(respondJSON.name).toBe('morpheus');
    expect(respondJSON.job).toBe('leader');
});