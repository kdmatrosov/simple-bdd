Feature: Implementation of substraction feature

  Scenario: -1 - -4
    Given From -1
    When Substract -4
    Then And result is 3

  Scenario: -6 - +5
    Given From -6
    When Substract 5
    Then And result is -11

  Scenario: 7 - 7
    Given From 7
    When Substract 7
    Then And result is 0