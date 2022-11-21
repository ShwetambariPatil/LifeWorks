import page from "./page";

class MyCartPage extends page {

    get yourCartPage() {
        return $("span.title")
    }

    get checkoutButton() {
        return $("button#checkout")
    }

    //Verify on your cart page
    async verifyOnCartPage() {
        await expect(this.yourCartPage).toBePresent();
    }

    //Navigate to checkout page
    async navigateToCheckoutPage() {
        await this.checkoutButton.click();
    }
}


export default new MyCartPage();