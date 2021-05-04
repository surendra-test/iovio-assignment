Feature: Decathlon sports website account creation

        @chrome
        Scenario Outline: As a user for online shopping, I want to create a decathlon account in windows <BrowserMode> browser
            Given I am on the Malinator site home page
             Then I create a decathlon account in <BrowserMode> browser

        Examples:
                  | BrowserMode |
                  | chrome      |

        @mobile
        Scenario Outline: As a user for online shopping, I want to create a decathlon account in windows mobile version of chrome
            Given I am on the Malinator site home page
             Then I create a decathlon account in <BrowserMode> browser

        Examples:
                  | BrowserMode |
                  | mobile      |