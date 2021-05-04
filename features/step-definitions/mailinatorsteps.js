/**
 * This page contains steps applicable for Malinator email service website
 */

const { Given, When, Then } = require('@cucumber/cucumber');
const Page = require('../pageobjects/page').default;
const HomePage = require('../pageobjects/home.page');
const MailinatorLoginPage = require('../pageobjects/mailinator.login.page');
const MailinatorInboxPage = require('../pageobjects/mailinator.inbox.page');

Given(/^I am on the Malinator site home page$/, async () => {
  await HomePage.launchApplication("Malinator");
});

Then(/^I do mailinator login$/, async () => {
  await MailinatorLoginPage.loginMailinator();
});

Then(/^I open the email for activation and click on link for account activation$/, async () => {
  await MailinatorInboxPage.activateAccount();
});

Then(/^I create decathlon account$/, async () => {
  await MailinatorInboxPage.activateAccount();
});