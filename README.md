# iovio-assignment
# Project Name : Decathlon-Test

**Ecommerce website for automation**:

https://www.decathlon.com/  - This ecommerce website is used for automation

https://www.mailinator.com/  - This site is used to generate a random and unique email Which is needed for user creation.

**Tools and Technology used** :
java script, WebdriverlO, Cucumber, visual code

**Browser**: 
Windows browser and mobile version of chrome

**External website** :
https://www.mailinator.com/ : 
This website helps to create a unique email that will be utilized in user account creation. We need a unique email in every execution of the account creation scenario

**Execution:** 
Please use these commond in base terminal :

npx wdio run ./wdio.conf-chromebrowser.js - To run test sceanrios in windows chrome browser

npx wdio run ./wdio.conf-chromemobile.js - To run test sceanrios in mobile version of chrome browser

Note: Please execute npm install to download dependancies from package.json file

**Challenges**: 
1) The web element identification which works for windows chrome browser may not work mobile version of chrome
2) Switching between tabs in the same browser works fine but the same does not work in mobile version of chrome. In mobile version of chrome, new windows opens in new tab aand that new tab/window is not the mobile version of chrome. This could be a reason that browser's switchToWindow method is not working in this case.I believe that some custom code need to be written to hendle this situation.I wonder if there is any is inbuilt support available in webdriverio.

**Comments**: I have added comments in project artiface to understand the automation project.
