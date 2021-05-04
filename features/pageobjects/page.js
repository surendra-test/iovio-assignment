
/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/

const APPNAME = "Decathlon";
var urlDecathlon = 'https://www.decathlon.com';
var urlMalinator = 'https://www.mailinator.com';

module.exports = class Page {

    //launch application
    launchApplication(appname) {
        if (appname == APPNAME) {
            browser.maximizeWindow();
            return browser.url(urlDecathlon)
        } else {
            browser.maximizeWindow();
            return browser.url(urlMalinator)
        }
    }

    //wait between steps
    sleepTest(milliseconds) {
        return new Promise(resolve => setTimeout(resolve, milliseconds));
    }

    //Screenshot
    async takescreenshot(path) {
        var screenshotName = "Screen_" + Date.now().toString();
        browser.saveScreenshot("C:\\screenshot\\screenshotName.png");
    }

}