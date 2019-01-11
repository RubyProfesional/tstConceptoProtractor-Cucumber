  @regression
  Scenario: Search for course from External DataSource
    Given I navigate to aplication "http://simplexilimitada.eastus.cloudapp.azure.com/auth/sign-in"
    And I enter text in |<usuario>|<contrasena>|
    And I get all the heading

    Examples:
      | usuario | contrasena |

  Scenario Outline: Create a new course
    And  I start creating new course with following details
      | course   |
      | selenium |
