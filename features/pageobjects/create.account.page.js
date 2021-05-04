const Page = require('./page');

/**
 * This class contains specific selectors and methods for a create account page page
 */

class CreateAccountPage extends Page {

  get lnkSignIn() { return $('=Sign In') }
  get lnkCreateAccount() { return $('=CREATE ACCOUNT') }
  get txtFirstName() { return $('#FirstName') }
  get txtLastName() { return $('#LastName') }
  get txtEmail() { return $('#Email') }
  get btnCreate() { return $('//input[@value="Create"]') }
  get btnActivateAccount() { return $('//*[@id="//input[@value="Activate Account"]') }
  get lblAccountActivationMessage() { return $('//*[@id="create_customer"]/div/p') }

  /**
* This method helps in account creation
*/
  async createAccount() {

    await (await this.lnkSignIn).click();

    await (await this.lnkCreateAccount).click();

    await (await this.txtFirstName).setValue("rajesh");

    await (await this.txtLastName).setValue("sharman");

    await (await this.txtEmail).setValue("surendra.s1@rediffmail.com");

    await (await this.btnCreate).click();

  }

}
module.exports = new CreateAccountPage();