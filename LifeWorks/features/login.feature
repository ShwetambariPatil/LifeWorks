Feature: Sign In and Purchase Product
  As a customer
  I want to login
  So that I can purchase product

  Scenario Outline: As a user, I can log into

    Given I am on the login page
    When I login with <username> and <password>
    Then I should land on product page

    Examples:
      | username      | password     |
      | standard_user | secret_sauce |

