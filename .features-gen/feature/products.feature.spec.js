/** Generated from: feature\products.feature */
import { test } from "../../pages/fixtures.ts";

test.describe("Products", () => {

  test("User should be able to add a product to the cart", { tag: ["@products", "@add_to_cart"] }, async ({ Given, page, loginPage, productsPage, When, Then }) => {
    await Given("the user is logged in and on Products page", null, { page, loginPage, productsPage });
    await When("the user adds \"Sauce Labs Backpack\" to the cart", null, { productsPage });
    await Then("the cart item badge must show correct count of 1", null, { productsPage });
    await Then("clicking on the product button", null, { productsPage });
  });

  test.only("User should be able to remove the product from the cart", { tag: ["@products", "@only"] }, async ({ Given, page, loginPage, productsPage, When, Then }) => {
    await Given("the user is logged in and on Products page", null, { page, loginPage, productsPage });
    await When("the user adds \"Sauce Labs Bike Light\" to the cart", null, { productsPage });
    await Then("the user should be able to remove \"Sauce Labs Bike Light\" from the cart, using the `Remove` button", null, { productsPage });
    await Then("the cart item badge must not be displayed", null, { productsPage });
  });

  test("User should be able to log out", { tag: ["@products", "@logout"] }, async ({ Given, page, loginPage, productsPage, When, Then }) => {
    await Given("the user is logged in and on Products page", null, { page, loginPage, productsPage });
    await When("the user clicks Log out from hamburger menu", null, { productsPage });
    await Then("the user must be logged out", null, { loginPage });
  });

  test.describe("Social Media links in footer should work", () => {

    test("Example #1", { tag: ["@products", "@footer", "@social_media_links"] }, async ({ Given, page, loginPage, productsPage, Then, When }) => {
      await Given("the user is logged in and on Products page", null, { page, loginPage, productsPage });
      await Then("\"Twitter\" link in footer should be visible", null, { productsPage });
      await When("the user clicks \"Twitter\" link from footer, it should open correct \"https://twitter.com/saucelabs\" in a new tab", null, { page, productsPage });
    });

    test("Example #2", { tag: ["@products", "@footer", "@social_media_links"] }, async ({ Given, page, loginPage, productsPage, Then, When }) => {
      await Given("the user is logged in and on Products page", null, { page, loginPage, productsPage });
      await Then("\"Facebook\" link in footer should be visible", null, { productsPage });
      await When("the user clicks \"Facebook\" link from footer, it should open correct \"https://www.facebook.com/saucelabs\" in a new tab", null, { page, productsPage });
    });

    test("Example #3", { tag: ["@products", "@footer", "@social_media_links"] }, async ({ Given, page, loginPage, productsPage, Then, When }) => {
      await Given("the user is logged in and on Products page", null, { page, loginPage, productsPage });
      await Then("\"LinkedIn\" link in footer should be visible", null, { productsPage });
      await When("the user clicks \"LinkedIn\" link from footer, it should open correct \"https://www.linkedin.com/company/sauce-labs\" in a new tab", null, { page, productsPage });
    });

  });

  test("Copyright text in footer should be visible", { tag: ["@products", "@footer", "@copyright"] }, async ({ Given, page, loginPage, productsPage, Then, And }) => {
    await Given("the user is logged in and on Products page", null, { page, loginPage, productsPage });
    await Then("copyright text in footer should be visible", null, { productsPage });
    await And("the copyright text contents should be correct", null, { productsPage });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $testMetaMap: ({}, use) => use(testMetaMap),
  $uri: ({}, use) => use("feature\\products.feature"),
});

const testMetaMap = {
  "User should be able to add a product to the cart": {"pickleLocation":"5:3","tags":["@products","@add_to_cart"],"ownTags":["@add_to_cart"]},
  "User should be able to remove the product from the cart": {"pickleLocation":"12:3","tags":["@products","@only"],"ownTags":["@only"]},
  "User should be able to log out": {"pickleLocation":"19:3","tags":["@products","@logout"],"ownTags":["@logout"]},
  "Social Media links in footer should work|Example #1": {"pickleLocation":"32:7","tags":["@products","@footer","@social_media_links"]},
  "Social Media links in footer should work|Example #2": {"pickleLocation":"33:7","tags":["@products","@footer","@social_media_links"]},
  "Social Media links in footer should work|Example #3": {"pickleLocation":"34:7","tags":["@products","@footer","@social_media_links"]},
  "Copyright text in footer should be visible": {"pickleLocation":"37:3","tags":["@products","@footer","@copyright"],"ownTags":["@copyright","@footer"]},
};