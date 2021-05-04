
Feature: A Journey at Decathlon Website

        @chrome
        Scenario Outline: As a guest user, I can navigate to payment checkout and validate credit card fields in chrome browser

            Given I am on the Decathlon US site home page in chrome
             When I search the <item>
              And I open the item
              And I add the item in the cart
              And I do the checkout
              And I enter payment details and continue for shopping
              And I navigate to payment page
             Then I verify credit card fields

        Examples:
                  | item                                    |
                  | Kipsta F500, Hybrid Soccer Ball, Size 4 |

        @mobile
        Scenario Outline: As a guest user, I can navigate to payment checkout and validate credit card fields in mobile version of chrome

            Given I am on the Decathlon US site home page in mobile version of chrome
             When I search the <item>
              And I open the item
              And I add the item in the cart
              And I view the cart and do checkout
              And I enter payment details and continue for shopping
              And I navigate to payment page
             Then I verify credit card fields

        Examples:
                  | item                                    |
                  | Kipsta F500, Hybrid Soccer Ball, Size 4 |