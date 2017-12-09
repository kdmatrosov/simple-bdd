Feature: Implementation of multiplication feature

  Scenario Outline: <first> * <second>
    Given Multiplate <first>
    When With <second>
    Then Result of multiplication is <result>

    Examples:
      | first | second | result |
      | 5 |         4 |    20 |
      |  -3 |      8 |   -24 |
      |  -3 |      -4 |   12 |
      |  5 |        0 |     0 |
