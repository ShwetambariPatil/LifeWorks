import page from "./page";

class ProductPage extends page {
    get pageTitle() {
        return $("span[class='title']");
    }

    specificProduct(index) {
        return $(`//*[@id="inventory_container"]/div/div[${index}]/div[2]/div[2]/button`)
    }

    get removeProduct() {
        return $("button#remove-sauce-labs-bolt-t-shirt");
    }

    get shoppingCart() {
        return $("#shopping_cart_container > a > span")
    }

    getPrice(index) {
        return $(`//*[@id="inventory_container"]/div/div[${index}]/div[2]/div[2]/div`)
    }

    get productLength() {
        return $$("//*[@id='inventory_container']/div/div")
    }


    //Get product page title
    async verifyProductPage() {
        const ProductPageText = await this.pageTitle.getText();
        return ProductPageText;
    }

    //Add three products in my cart
    async addThreePrductsToBag() {
        for (let i = 1; i <= 3; i++) {

            await this.specificProduct(i).click();
        }
    }

    //Get  total products in shopping cart
    async getShoppingCartText() {
        const cartNumber = await this.shoppingCart.getText();
        return cartNumber;
    }

    //Remove product from basket
    async removeProductFromCart() {
        await this.removeProduct.click();
    }

    // Click on shopping cart icon
    async navigateToCartPage() {
        await this.shoppingCart.click();
    }

    //Select product which can add total order value between $30-$60
    async selectProductsPrices() {
        const numOfProducts = await this.productLength.length
        console.log(numOfProducts)
        let totalPrice = 0;
        let orderTotal = 0;
        let minOrder = 30;
        let maxOrder = 60;

        for (let i = 1; i < numOfProducts; i++) {
            //get the item price
            let price = await this.getPrice(i).getText();
            let productPrice = await parseFloat(price.slice(1));
            console.log(productPrice)
            if ((totalPrice + productPrice) <= (maxOrder - (maxOrder * 0.08))) {
                await this.specificProduct(i).click();
                //calculate total price of the added items
                totalPrice = (totalPrice + productPrice);
                //Calculater order total including tax
                orderTotal = totalPrice + (totalPrice * 0.08)
            } else if (orderTotal >= minOrder && orderTotal <= maxOrder) {
                break;
            } else {
                console.log('There are no products available to make order between ' + minOrder + ' and ' + maxOrder);
            }
            console.log(totalPrice)
            console.log(orderTotal)
        }

    }

}

export default new ProductPage();

