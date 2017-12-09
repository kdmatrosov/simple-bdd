Feature: Implementation of division feature

  Scenario: 25 / 2
    Given Divide 25
    When By 2
    Then Result of division is 12.5

  Scenario: -12 / 4
    Given Divide -12
    When By 4
    Then Result of division is -3.0

  Scenario: 4 / -2
    Given Divide 4
    When By -2
    Then Result of division is -2.0

  Scenario: -15 / -3
    Given Divide -15
    When By -3
    Then Result of division is 5.0

  Scenario: 10 / 0
    Given Divide 10
    When By 0
    Then Result of division is Error

  Scenario: 0 / -7
    Given Divide 0
    When By -7
    Then Result of division is 0.0
