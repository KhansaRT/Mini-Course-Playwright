import checkoutPage from "../locator/checkoutPage";
import { expect } from "@playwright/test";

export default class checkoutActions {
    /**
     * 
     * @param {import('@playwright/test').Page} page
     */
    constructor(page){
        this.page = page;
        this.checkoutPage = new checkoutPage();
        this.inputUsername = page.locator(this.checkoutPage.inputUsername);
        this.inputPassword = page.locator(this.checkoutPage.inputPassword);
        this.ButtonLogin = page.locator(this.checkoutPage.buttonLogin);
        this.addToCartProduct1 = page.locator(this.checkoutPage.addToCartProduct1);
        this.addToCartProduct2 = page.locator(this.checkoutPage.addToCartProduct2);
        this.buttonCart = page.locator(this.checkoutPage.buttonCart);
        this.buttonCheckout = page.locator(this.checkoutPage.buttonCheckout);
        this.inputFirstName = page.locator(this.checkoutPage.inputFirstName);
        this.inputLastName = page.locator(this.checkoutPage.inputLastName);
        this.inputPostCode = page.locator(this.checkoutPage.inputPostCode);
        this.buttonContinue = page.locator(this.checkoutPage.buttonContinue);
        this.buttonFinish = page.locator(this.checkoutPage.buttonFinish);
        this.CheckoutCompleteMessage = page.locator(this.checkoutPage.CheckoutCompleteMessage);
    }

    async goto(){
        await this.page.goto('https://www.saucedemo.com/');
    }

    async Checkout() {
        await this.inputUsername.fill('standard_user');
        await expect(this.inputUsername).toHaveValue('standard_user');
        await this.inputPassword.fill('secret_sauce');
        await expect(this.inputPassword).toHaveValue('secret_sauce');
        await this.ButtonLogin.click();
        await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html');
        await this.addToCartProduct1.click();
        await this.addToCartProduct2.click();
        await this.buttonCart.click();
        await expect(this.page).toHaveURL('https://www.saucedemo.com/cart.html');
        await this.buttonCheckout.click();
        await expect(this.page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');
        await this.inputFirstName.fill('Khansa');
        await expect(this.inputFirstName).toHaveValue('Khansa');
        await this.inputLastName.fill('Rafifah Taqiyyah');
        await expect(this.inputLastName).toHaveValue('Rafifah Taqiyyah');
        await this.inputPostCode.fill('15610');
        await expect(this.inputPostCode).toHaveValue('15610');
        await this.buttonContinue.click();
        await expect(this.page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');
        await this.buttonFinish.click();
        await expect(this.CheckoutCompleteMessage).toContainText('Thank you for your order!');
    }
}

