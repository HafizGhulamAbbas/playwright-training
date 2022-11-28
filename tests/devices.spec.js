// @ts-check
const { test, expect, devices } = require('@playwright/test');
const iPhone = devices['iPhone 11'];

test('emulate mobile devices', async ({ browser }) => {

    const context = await browser.newContext({
        ...iPhone, // spread operator unpacks iPhone const
        permissions: ['geolocation'], // allows geolocation
        geolocation: { latitude: 19.432608, longitude: -99.133209 }, // Mexico City coordinates
        locale: 'fr-FR' // French from France
    });

    const page = await context.newPage();

    await page.goto('https://www.google.com/maps');
    await page.waitForTimeout(5000);

    await page.close()
});
