
class MailinatorInboxPage {

  /**
   * This class contains the objects and methods for Mailinator Inbox Page
   */

  get linkActivationEmail() { return $("//td[normalize-space()='Decathlon']") }
  get linkActivationEmailMobile() { return $("//a[normalize-space()='Activate Your New Decathlon Account']") }
  get pass() { return $('#CustomerPassword') }
  get confirmPass() { return $('#CustomerPasswordConfirmation') }
  get activated() { return $('.btn.btn--full') }

  /**
  * This method helps click on link in email to activate the user account
  */
  async activateAccount(browsermode) {

    if (browsermode == "mobile") {
      await (await this.linkActivationEmailMobile).click();
    } else {
      await (await this.linkActivationEmail).click();
    }

    var iframe = await $("//iframe[@id='html_msg_body']");

    await browser.switchToFrame(iframe);

    await (await $("//a[normalize-space()='Activate your account']")).click()

    await browser.switchToFrame(null)

  }

  /**
   * This method helps to set password for the newly created user
   */
  async setPassAndActivate() {

    await (await this.pass).setValue('123456')

    await (await this.confirmPass).setValue('123456')

    await (await this.activated).click()

  }

}

module.exports = new MailinatorInboxPage();