const homePage = require('./home.page');
const Page = require('./page');

/**
 * This class contains the objects and methods for Mailinator Login Page
 */

class MailinatorLoginPage {

  //web object declaration
  get btnGoIn() { return $('#go-to-public') }
  get txtUserName() { return $('.form-control.input-text.h-auto') }

  /**
  * This method helps to create a random and unique email always as and when it is called
  */
  async createNewMail() {

    await homePage.launchApplication("Malinator");

    var email = "Decathlon_" + Date.now().toString();

    await this.loginMailinator(email)

    return email + '@mailinator.com'

  }

  /**
  * This method helps to login in malinator email service site
  */
  async loginMailinator(email) {

    await (await this.txtUserName).setValue(email);

    await (await this.btnGoIn).click();
  }

}

module.exports = new MailinatorLoginPage();