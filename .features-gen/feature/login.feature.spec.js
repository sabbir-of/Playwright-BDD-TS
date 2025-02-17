/** Generated from: feature\login.feature */
import { test } from "../../pages/fixtures.ts";

test.describe("User Login", () => {

  test.describe.only("Login should work with valid login credentials", () => {

    test("Example #1", { tag: ["@login", "@valid_creds", "@only"] }, async ({ Given, loginPage, When, Then, page, productsPage }) => {
      await Given("the User is on login page", null, { loginPage });
      await When("the User tries to login with \"standard_user\" as username and \"secret_sauce\" as password", null, { loginPage });
      await Then("the User should be on Products page", null, { page, productsPage });
    });

    test("Example #2", { tag: ["@login", "@valid_creds", "@only"] }, async ({ Given, loginPage, When, Then, page, productsPage }) => {
      await Given("the User is on login page", null, { loginPage });
      await When("the User tries to login with \"problem_user\" as username and \"secret_sauce\" as password", null, { loginPage });
      await Then("the User should be on Products page", null, { page, productsPage });
    });

    test("Example #3", { tag: ["@login", "@valid_creds", "@only"] }, async ({ Given, loginPage, When, Then, page, productsPage }) => {
      await Given("the User is on login page", null, { loginPage });
      await When("the User tries to login with \"performance_glitch_user\" as username and \"secret_sauce\" as password", null, { loginPage });
      await Then("the User should be on Products page", null, { page, productsPage });
    });

  });

  test.describe("Login should fail with invalid login credentials", () => {

    test("Example #1", { tag: ["@login", "@invalid_creds"] }, async ({ Given, loginPage, When, Then }) => {
      await Given("the User is on login page", null, { loginPage });
      await When("the User tries to login with \"invalid_username\" as username and \"secret_sauce\" as password", null, { loginPage });
      await Then("the User should see invalid credentials error message", null, { loginPage });
    });

    test("Example #2", { tag: ["@login", "@invalid_creds"] }, async ({ Given, loginPage, When, Then }) => {
      await Given("the User is on login page", null, { loginPage });
      await When("the User tries to login with \"standard_user\" as username and \"invalid_password\" as password", null, { loginPage });
      await Then("the User should see invalid credentials error message", null, { loginPage });
    });

    test("Example #3", { tag: ["@login", "@invalid_creds"] }, async ({ Given, loginPage, When, Then }) => {
      await Given("the User is on login page", null, { loginPage });
      await When("the User tries to login with \"invalid_username\" as username and \"invalid_password\" as password", null, { loginPage });
      await Then("the User should see invalid credentials error message", null, { loginPage });
    });

  });

  test("Loocked out user must not be able to login with valid login credentials", { tag: ["@login", "@locked_out_user"] }, async ({ Given, loginPage, When, Then }) => {
    await Given("the User is on login page", null, { loginPage });
    await When("the User tries to login with \"locked_out_user\" as username and \"secret_sauce\" as password", null, { loginPage });
    await Then("the User should see a locked out error message", null, { loginPage });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $testMetaMap: ({}, use) => use(testMetaMap),
  $uri: ({}, use) => use("feature\\login.feature"),
});

const testMetaMap = {
  "Login should work with valid login credentials|Example #1": {"pickleLocation":"12:7","tags":["@login","@valid_creds","@only"]},
  "Login should work with valid login credentials|Example #2": {"pickleLocation":"13:7","tags":["@login","@valid_creds","@only"]},
  "Login should work with valid login credentials|Example #3": {"pickleLocation":"14:7","tags":["@login","@valid_creds","@only"]},
  "Login should fail with invalid login credentials|Example #1": {"pickleLocation":"24:7","tags":["@login","@invalid_creds"]},
  "Login should fail with invalid login credentials|Example #2": {"pickleLocation":"25:7","tags":["@login","@invalid_creds"]},
  "Login should fail with invalid login credentials|Example #3": {"pickleLocation":"26:7","tags":["@login","@invalid_creds"]},
  "Loocked out user must not be able to login with valid login credentials": {"pickleLocation":"29:3","tags":["@login","@locked_out_user"],"ownTags":["@locked_out_user"]},
};