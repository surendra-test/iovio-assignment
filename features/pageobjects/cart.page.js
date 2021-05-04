const Page = require('./page');

/**
 * This class contains specific selectors and methods for a cart page
 */

class CartPage extends Page {

  get linkViewCart() { return $('//*[@id="post-add-to-cart-drawer"]/div[2]/div/div/section/section[2]/form/a') }
  get btnAddToCart() { return $('//*[@id="Quantity"]//following::button[1]') }
  //get btnCheckout() { return $('#post-add-to-cart-drawer > div.de-Drawer-contentWrapper.de-Drawer--extraWide > div > div > section > section.de-PostAddToCart-content.de-u-bgWhite.de-u-md-spaceBottomNone.de-u-spaceTop.de-u-lg-spaceTopNone > form > button') }
 
  get btnCheckout() { return $('//*[@id="your-shopping-cart"]/div[2]/div[5]/div/main/div[2]/div/div/section[2]/div/section[2]/form/button') }
 
  get btnCheckoutMobile() { return $('//*[@id="your-shopping-cart"]/div[2]/div[5]/div/main/div[2]/div/div/section[1]/div/section[2]/form/button') }
 

  async addItemToCart() {
    
    await (await this.btnAddToCart).click();

  }

  async doCheckout() {

    await (await this.linkViewCart).click();

    await browser.pause(10000);

    await (await this.btnCheckout).click();

  }

  async doCheckoutMobile() {

    await (await this.linkViewCart).click();

    await browser.pause(10000);

    await (await this.btnCheckoutMobile).click();
     
  }

}

module.exports = new CartPage();