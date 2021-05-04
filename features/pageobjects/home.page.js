
const Page = require('./page');

/**
 * 
 * This class is containing specific selectors and methods for a home page
 */

class HomePage extends Page {

  get lnkEnterUSSite() { return $('//*[contains(text(),"Enter U.S. Site")]') }
  get lnkEnterNLSite() { return $('=Enter Netherlands Site') }
  get txtSearch() { return $('#header-search-2_0 > div > form > input') }
  get btnSearch() { return $('#header-search-2_0 > div > form > button') }
  get lnkItemName() { return $('=Kipsta F500, Hybrid Soccer Ball, Size 4') }
  get signInBtnChrome() { return $("body > div:nth-child(4) > header:nth-child(5) > nav:nth-child(3) > ul:nth-child(1) > li:nth-child(4) > a:nth-child(1) > span:nth-child(2)") }
  get signInBtnMobile() { return $('//*[@id="decathlon-best-gear-clothing-and-footwear-for-all-sports"]/div[2]/div[6]/div[2]/main/div[3]/a[1]') }
  get createAccount() { return $("//a[normalize-space()='Create account']") }
  get firstName() { return $('#FirstName') }
  get lastName() { return $('#LastName') }
  get email() { return $('#Email') }
  get createButton() { return $('//input[@value="Create"]') }
  get header() { return $("h1[class='h3 accountHeading']") }
  async NavigateCountrySite() {

    await (await this.lnkEnterUSSite).click();
  }

  async searchItem(item) {
    await (await this.txtSearch).setValue(item);
    await (await this.btnSearch).click();
  }

  async openItem(item) {
    await (await this.lnkItemName).click();
  }

  open() {
    return super.open();
  }
  
}

module.exports = new HomePage();