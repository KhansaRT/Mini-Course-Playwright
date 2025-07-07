// @ts-check
import { test, expect, request } from '@playwright/test';
/* 
  API TESTING
  API test URL = https://reqres.in/ 
*/

test('GET List Users', async ({ page }) => {
    const apiContext = await request.newContext();
    const res = await apiContext.get('https://reqres.in/api/users?page=2');
    expect(res.status()).toBe(200);
    const respondJSON = await res.json();
    expect(respondJSON.page).toBe(2);
    expect(respondJSON.total).toBe(12);
});

test('POST Create User', async ({ page }) => {
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