const Page = require('./page');
const expectChai = require('chai').expect;
var assert = require('assert');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class PaymentPage extends Page {

  get txtEmail() { return $('#checkout_email') }
  get txtFirstName() { return $('#checkout_shipping_address_first_name') }
  get txtLastName() { return $('#checkout_shipping_address_last_name') }
  get txtAdress() { return $('#checkout_shipping_address_address1') }
  get txtCity() { return $('#checkout_shipping_address_city') }
  get ddState() { return $('#checkout_shipping_address_province') }
  get txtZipCode() { return $('#checkout_shipping_address_zip') }
  get txtPhoneNo() { return $('#checkout_shipping_address_phone') }
  get btnContinueToShipping() { return $('#continue_button') }
  get btnContinueToPayment() { return $('#continue_button') }
  get lblCreditCard() { return $('//label[@for="checkout_payment_gateway_37830852670"]') }
 /* get txtCardNumber() { return $('#number') }
  get txtNameOnTheCard() { return $('#name') }
  get txtExpiry() { return $('#expiry') }
  get txtSecurityCode() { return $('#verification_value') } */

  get txtCardNumber() { return $('//input[@placeholder="Card number"]') }
  get txtNameOnTheCard() { return $('//input[@placeholder="Name on card"]') }
  get txtExpiry() { return $('//input[@placeholder="Expiration date (MM / YY)"]') }
  get txtSecurityCode() { return $('//input[@placeholder="Security code"]') }

  /**
  * This method helps in filling shipping details
  */
  async enterShippingDetails() {
    await (await this.txtEmail).setValue("surendraqa10@gmail.com");

    await (await this.txtFirstName).setValue("surendra");

    await (await this.txtLastName).setValue("singh");

    await (await this.txtAdress).setValue("25737 US Rt 11");

    await (await this.txtCity).setValue("city");

    await (await this.ddState).selectByAttribute('value', "FL");

    await (await this.txtZipCode).setValue("32303");

    await (await this.txtPhoneNo).setValue("0633462407");

    await this.sleepTest(5000);

    await (await this.btnContinueToShipping).click();

  }
  async continueToShipping() {
    await (await this.btnContinueToShipping).click();
  }

  async continueToPayment() {
    await (await this.btnContinueToPayment).click();
  }

  /**
  * This method helps to validate credit card fields
  */
  async verifyCreditCardDetails() {
    var iframe = await $$(".card-fields-iframe");

    await browser.switchToFrame(iframe[0]);

    const cn = await (await this.txtCardNumber).getAttribute('placeholder');

    console.log(cn);

    assert(cn == "Card number");

    await browser.switchToFrame(null);

    await browser.switchToFrame(iframe[1]);

    const nodc = await (await this.txtNameOnTheCard).getAttribute('placeholder');

    console.log(nodc);

    assert(nodc == "Name on card");

    await browser.switchToFrame(null);

    await browser.switchToFrame(iframe[3]);

    const expiry = await (await this.txtExpiry).getAttribute('placeholder');

    console.log(expiry);

    assert(expiry == "Expiration date (MM / YY)");

    await browser.switchToFrame(null);

    await browser.switchToFrame(iframe[4]);

    const seccode = await (await this.txtSecurityCode).getAttribute('placeholder');

    console.log(seccode);

    assert(seccode == "Security code");

    await browser.switchToFrame(null);
  }

}
module.exports = new PaymentPage();