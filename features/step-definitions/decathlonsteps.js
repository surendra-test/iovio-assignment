/**
 * This is contains all the steps used in Decathlon website
 */

const { Given, When, Then } = require('@cucumber/cucumber');
const Page = require('../pageobjects/page').default;
const HomePage = require('../pageobjects/home.page');
const CartPage = require('../pageobjects/cart.page');
const PaymentPage = require('../pageobjects/payment.page');
const CreateAccountPage = require('../pageobjects/create.account.page');
const MailinatorLoginPage = require('../pageobjects/mailinator.login.page');
const MailinatorInboxPage = require('../pageobjects/mailinator.inbox.page');
var assert = require('assert');

Given(/^I am on the Decathlon US site home page in chrome$/, async () => {
    await HomePage.launchApplication("Decathlon");
    await HomePage.NavigateCountrySite();
});

Given(/^I am on the Decathlon US site home page in mobile version of chrome$/, async () => {
    await HomePage.launchApplication("Decathlon");
});


When(/^I search the (.*)$/, async (item) => {
    await HomePage.searchItem(item);
});

When(/^I open the item$/, async () => {
    await HomePage.openItem();
});

When(/^I add the item in the cart$/, async () => {
    await CartPage.addItemToCart();
});

When(/^I do the checkout$/, async () => {
    await CartPage.doCheckout();
});

When(/^I view the cart and do checkout$/, async () => {
    await CartPage.doCheckoutMobile();
});


When(/^I enter payment details and continue for shopping$/, async () => {
    await PaymentPage.enterShippingDetails();
});

When(/^I navigate to payment page$/, async () => {
    await PaymentPage.continueToPayment();

});

Then(/^I verify credit card fields$/, async () => {
    await PaymentPage.verifyCreditCardDetails();

});

Then(/^I create the decathlon account$/, async () => {
    await CreateAccountPage.createAccount();
});

/*
Then(/^I set the password and activate decathlon account$/, async () => {
    await CreateAccountPage.setPasswordAndActivateAccount();
}); */

Then(/^I create a decathlon account in (.*) browser$/, async (browsermode) => {
    if (browsermode == "mobile") {

        //1. Create an email in malinator email service
        const email = await MailinatorLoginPage.createNewMail();

        console.log("Email created : " + email);

        HomePage.launchApplication("Decathlon");

        //3.click on create account and enter user details
        await (await HomePage.signInBtnMobile).click();

        await (await HomePage.createAccount).click();

        await (await HomePage.firstName).setValue('Surendra');

        await (await HomePage.lastName).setValue('Singh');

        await (await HomePage.email).setValue(email);

        //4.click on create account
        await (await HomePage.createButton).click();

        await browser.pause(5000);

        //5.open newly email account
        HomePage.launchApplication("Malinator");

        await (await MailinatorLoginPage.txtUserName).setValue(email);

        await (await MailinatorLoginPage.btnGoIn).click();

        //6.activate the link
        await MailinatorInboxPage.activateAccount(browsermode);

        //Note : Step 7, 8 and 9 are not working in mobile version of chrome. Please see the finding in readme file
        //7.switch to newly opened tab in browser
        var tabs = await browser.getWindowHandles();

        //8.enter new password for Decathlon user
        await MailinatorInboxPage.setPassAndActivate();

        //9. Verify account created
        let headerText = await (await HomePage.header).getText();

        assert(headerText == "Hey, Surendra!");


    } else {  //chrome

        //1.create an email in malinator email service
        const email = await MailinatorLoginPage.createNewMail();

        console.log("Email created : " + email);

        //2.launch Decathlon website and navigate to us home page
        HomePage.launchApplication("Decathlon");

        await HomePage.NavigateCountrySite();

        //3.click on create account and enter user details
        await (await HomePage.signInBtnChrome).click();

        await (await HomePage.createAccount).click();

        await (await HomePage.firstName).setValue('Surendra');

        await (await HomePage.lastName).setValue('Singh');

        await (await HomePage.email).setValue(email);

        //4.click on create account
        browser.saveScreenshot("C:\\screenshot\\11.png");

        await (await HomePage.createButton).click();

        browser.saveScreenshot("C:\\screenshot\\2.png");

        await browser.pause(3000);

        //5.open newly email account
        HomePage.launchApplication("Malinator");

        console.log("========email=========");

        await (await MailinatorLoginPage.txtUserName).setValue(email);

        await (await MailinatorLoginPage.btnGoIn).click();
        await browser.pause(3000);

        //6.activate the link
        await MailinatorInboxPage.activateAccount(browsermode);

        //7.switch to newly opened tab in browser
        var tabs = await browser.getWindowHandles();
        await browser.switchToWindow(tabs[1]);

        //8.enter new password for Decathlon user
        await MailinatorInboxPage.setPassAndActivate();

        //9.verify account created
        let headerText = await (await HomePage.header).getText();

        assert(headerText == "Hey, Surendra!");
    }

});
