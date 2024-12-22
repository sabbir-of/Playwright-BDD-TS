import { expect } from "@playwright/test";
import { createBdd } from 'playwright-bdd';
import { test } from '../pages/fixtures';
import logger from "../logger";

const { Given, When, Then } = createBdd(test);


Given('the User is on login page', async ({ loginPage }) => {
    // Log the step of navigating to the login page
    logger.info('Navigating to the login page...');
    
    await loginPage.goto();

    logger.info('User is on the login page');
});

When('the User tries to login with {string} as username and {string} as password', async ({ loginPage }, username: string, password: string) => {
    // Log the login attempt with username and password
    logger.info(`User is attempting to log in with username: ${username} and password: ${password}`);
    
    await loginPage.doLogin(username, password);

    logger.info('Login attempt completed');
});

Then('the User should be on Products page', async ({ page, productsPage }) => {
    // Log the check for navigation to the products page
    logger.info('Checking if the user is redirected to the Products page...');
    
    await expect(page).toHaveURL(/.*inventory.html/);
    
    await expect(productsPage.productHeading).toBeVisible();

    logger.info('User is successfully on the Products page');
});

Then('the User should see a locked out error message', async ({ loginPage }) => {
    // Log the check for the locked-out error message
    logger.info('Checking for locked out error message...');
    
    await expect(loginPage.errorMessage).toBeVisible();

    const errorText = await loginPage.errorMessage.textContent();
    expect(errorText).toEqual('Epic sadface: Sorry, this user has been locked out.');
    
    logger.info('User sees the locked out error message');
});

Then('the User should see invalid credentials error message', async ({ loginPage }) => {
    // Log the check for the invalid credentials error message
    logger.info('Checking for invalid credentials error message...');
    
    await expect(loginPage.errorMessage).toBeVisible();

    const errorText = await loginPage.errorMessage.textContent();
    expect(errorText).toEqual('Epic sadface: Username and password do not match any user in this service');

    logger.info('User sees the invalid credentials error message');
});

