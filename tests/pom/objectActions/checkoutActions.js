import checkoutPage from "../locator/checkoutPage";
import { expect } from "@playwright/test";

export default class checkoutActions {
    /**
     * 
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.checkoutPage = new checkoutPage();
    
        this.buttonCheckout = page.locator(this.checkoutPage.buttonCheckout);
        this.inputFirstName = page.locator(this.checkoutPage.inputFirstName);
        this.inputLastName = page.locator(this.checkoutPage.inputLastName);
        this.inputPostCode = page.locator(this.checkoutPage.inputPostCode);
        this.buttonContinue = page.locator(this.checkoutPage.buttonContinue);
        this.buttonFinish = page.locator(this.checkoutPage.buttonFinish);
        this.CheckoutCompleteMessage = page.locator(this.checkoutPage.CheckoutCompleteMessage);
    }

    async ClickCheckout() {
        await this.buttonCheckout.click();
    }

    async CheckoutPage1() {
        await expect(this.page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html'); // validate user move to Checkout page 1
        await this.inputFirstName.fill('Khansa');
        await expect(this.inputFirstName).toHaveValue('Khansa');
        await this.inputLastName.fill('Rafifah Taqiyyah');
        await expect(this.inputLastName).toHaveValue('Rafifah Taqiyyah');
        await this.inputPostCode.fill('15610');
        await expect(this.inputPostCode).toHaveValue('15610');
        await this.buttonContinue.click();
    }

    async CheckoutPage2() {
        await expect(this.page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html'); // validate user move to Checkout page 2
        await this.buttonFinish.click();
        await expect(this.CheckoutCompleteMessage).toContainText('Thank you for your order!');
    }
}