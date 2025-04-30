import mainPage from "../locator/mainPage";
import { expect } from "@playwright/test";

export default class mainPageActions {
    /**
     * 
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.mainPage = new mainPage();

        this.addToCartProduct1 = page.locator(this.mainPage.addToCartProduct1);
        this.addToCartProduct2 = page.locator(this.mainPage.addToCartProduct2);
        this.addToCartProduct3 = page.locator(this.mainPage.addToCartProduct3);
        this.buttonCart = page.locator(this.mainPage.buttonCart);
    }

    async AddToChart() {
        await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html'); // validate user move to main page
        await this.addToCartProduct1.click();
        await this.addToCartProduct2.click();
        await this.addToCartProduct3.click();
    }

    async MoveToCartPage () {
        await this.buttonCart.click();
        await expect(this.page).toHaveURL('https://www.saucedemo.com/cart.html'); // validate user move to cart page
    }
}
