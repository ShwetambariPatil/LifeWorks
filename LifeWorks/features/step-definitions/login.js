import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../pageobjects/login.page';
import ProductPage from '../pageobjects/product.page';
import {expect} from "chai";

const pages = {
    login: LoginPage,
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I should land on product page$/, async () => {
    const productPageTitle = await ProductPage.verifyProductPage();
    expect(productPageTitle).equal("PRODUCTS")
});
