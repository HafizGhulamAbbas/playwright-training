// @ts-check
const { test, expect } = require('@playwright/test');

test('recording video using context', async ( {browser} ) => {

    // Creating a page inside context
    const context = await browser.newContext({ 
        recordVideo: { 
            dir: "./recordings",
            size: { width: 640, height: 480 }
         } 
    });

    const page = await context.newPage();

    // Navigating to site
    await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1');

    // Click on button
    await page.click('button');

    // Waiting for loading animation to appear
    await page.waitForSelector('#loading');

    // And disappear
    await page.waitForSelector('#loading', { state: 'hidden' });

    await page.waitForTimeout(100);

    await page.close()
});