import {Given, When, Then} from '@wdio/cucumber-framework';
import {expect} from 'chai'
const assert = require('chai').assert;

import ProductPage from "../pageobjects/product.page";
import CartPage from "../pageobjects/myCart.page";
import CheckoutPage from "../pageobjects/checkout.page";

When(/^I select three products$/, async () => {
    await ProductPage.addThreePrductsToBag();
});

Then(/^I can see my cart have three product$/, async () => {
    await ProductPage.getShoppingCartText("3");
});
When(/^I remove one product from cart$/, async () => {
    await ProductPage.removeProductFromCart();
});

Then(/^I can see my cart have two products$/, async () => {
    const finalCartNumber = await ProductPage.getShoppingCartText();
    expect(finalCartNumber).equal("2")
});

When(/^I click on my cart$/, async () => {
    await ProductPage.navigateToCartPage();
});

Then(/^I should land on your cart page$/, async () => {
    await CartPage.verifyOnCartPage();
});

When(/^I click on checkout$/, async () => {
    await CartPage.navigateToCheckoutPage();
});

Then(/^I should land on checkout page$/, async () => {
    const checkoutPageHeading = await CheckoutPage.verifyCheckoutPageText()
    expect(checkoutPageHeading).equal("CHECKOUT: YOUR INFORMATION")
});

When(/^I enter my details$/, async () => {
    await CheckoutPage.enterCustomerDetails();
});

When(/^I click on finish button$/, async () => {
await CheckoutPage.clickOnFinishButton();
});

Then (/^I overview my order$/, async () => {
    const prices = await CheckoutPage.varifyOrderTotalvalue();
    assert.isAtLeast(prices, 30, 'OrderValue is greater or equal to 30');
    assert.isAtMost(prices, 60, 'OrderValue is less than or equal to 60');
});

Then(/^I should see successful message$/, async () => {
   const orderConfirmationText = await CheckoutPage.verifyOrderConfirmed();
    expect(orderConfirmationText).equal("THANK YOU FOR YOUR ORDER")
});


Then(/^I select products to make order value$/, async () => {
    await ProductPage.selectProductsPrices();
});
