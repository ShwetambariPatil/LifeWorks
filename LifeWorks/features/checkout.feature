Feature: Checkout
  As a customer
  I wand to perform checkout
  So that I can buy products

  Scenario Outline: Buy two products
    Given I am on the login page
    When I login with <username> and <password>
    Then I should land on product page
    When I select three products
    Then I can see my cart have three product
    When I remove one product from cart
    Then I can see my cart have two products
    When  I click on my cart
    Then I should land on your cart page
    When I click on checkout
    Then I should land on checkout page
    When I enter my details
    And I click on finish button
    Then I should see successful message
    Examples:
      | username      | password     |
      | standard_user | secret_sauce |


  Scenario Outline: Buy products with order value between  $30-$60
    Given I am on the login page
    When I login with <username> and <password>
    Then I should land on product page
    And I select products to make order value
    When  I click on my cart
    Then I should land on your cart page
    When I click on checkout
    Then I should land on checkout page
    When I enter my details
    Then I overview my order
    And I click on finish button
    Then I should see successful message
    Examples:
      | username      | password     |
      | standard_user | secret_sauce |
