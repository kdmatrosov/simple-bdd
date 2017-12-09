Feature: Implementation of addition feature

  Scenario: 1 + 6
    Given I start with 1
    When I add 6
    Then I end up with 7

  Scenario: -6 + -5
    Given I start with -6
    When I add -5
    Then I end up with -11

  Scenario: -6 + 7
    Given I start with -6
    When I add 7
    Then I end up with 1