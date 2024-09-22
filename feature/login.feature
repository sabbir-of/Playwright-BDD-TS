@login
Feature: User Login

  @valid_creds
  Scenario Outline: Login should work with valid login credentials
    Given the User is on login page
    When the User tries to login with "<username>" as username and "<password>" as password
    Then the User should be on Products page

    Examples: 
      | username                | password     |
      | standard_user           | secret_sauce |
      | problem_user            | secret_sauce |
      | performance_glitch_user | secret_sauce |

  @invalid_creds
  Scenario Outline: Login should fail with invalid login credentials
    Given the User is on login page
    When the User tries to login with "<username>" as username and "<password>" as password
    Then the User should see invalid credentials error message

    Examples: 
      | username         | password         |
      | invalid_username | secret_sauce     |
      | standard_user    | invalid_password |
      | invalid_username | invalid_password |

  @locked_out_user
  Scenario: Loocked out user must not be able to login with valid login credentials
    Given the User is on login page
    When the User tries to login with "locked_out_user" as username and "secret_sauce" as password
    Then the User should see a locked out error message



Here is the converted Gherkin scenarios to a BDD automation feature file format suitable for use with a tool like Cucumber.

### Feature File: `LoanIdentifiersValidation.feature`

```gherkin
```

### Explanation of the Changes:
1. **Scenario Outline Usage:** Reused `Scenario Outline` with examples for similar validation scenarios to avoid redundancy and promote data-driven testing.
2. **Parameterization:** Used `<Field Type>`, `<Booking System>`, and `<Invalid Condition>` placeholders in the `Scenario Outline` to allow for varied input data.
3. **Data Tables and Examples:** Organized validation scenarios with example tables to clearly separate different test cases, making them easy to read and maintain.
4. **Separate Scenarios for Specific Cases:** Kept scenarios that involve specific validation checks (e.g., those related to "SBC, CLO, or Hybrid") as individual scenarios to cover unique workflows or business logic.

This approach makes your feature file concise and suitable for automation testing.