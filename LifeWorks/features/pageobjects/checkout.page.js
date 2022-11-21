import page from "./page";

const assert = require('chai').assert;

class CheckoutPage extends page {

    get checkoutPage() {
        return $("span.title")
    }

    get firstNameField() {
        return $("input#first-name")
    }

    get lastNameField() {
        return $("input#last-name")
    }

    get postalCodeField() {
        return $("input#postal-code")
    }

    get continueButton() {
        return $("input#continue")
    }

    get finishButton() {
        return $("button#finish");
    }

    get orderConfirmedText() {
        return $("div#checkout_complete_container h2");
    }

    get orderTotal() {
        return $('div.summary_total_label');
    }

    async verifyCheckoutPageText() {
        const checkoutPageTitle = await this.checkoutPage.getText();
        return checkoutPageTitle;
    }

    //Enter customer details
    async enterCustomerDetails() {
        await this.firstNameField.setValue("Tester");
        await this.lastNameField.setValue("Test");
        await this.postalCodeField.setValue("EC1M 5UA");
        await this.continueButton.click();
    }

    //Click on finish button
    async clickOnFinishButton() {
        await this.finishButton.click();
    }

    //Get order confirmation text
    async verifyOrderConfirmed() {
        const orderConfirmedTitle = await this.orderConfirmedText.getText();
        return orderConfirmedTitle;
    }

    //verify order value is between $30-$60
    async varifyOrderTotalvalue() {
        const orderTotalPrice = await this.orderTotal.getText();
        const price = orderTotalPrice.replace(/^Total: +/, '')
        const orderTotalFinalPrice = await parseFloat(price.slice(1));
        console.log("This is final total:" + orderTotalFinalPrice);
        return orderTotalFinalPrice;
    }
}

export default new CheckoutPage();