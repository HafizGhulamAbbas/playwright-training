// @ts-check
const { test, expect } = require('@playwright/test');

test('taking screenshots of visible area, element or full page', async ({ page }) => {
    await page.goto('https://applitools.com/');

    // Take screenshot code
	await page.screenshot({ path: 'screenshot.png' });

	// Take screenshot of an element
	const logo = await page.$('.logo');
	await logo?.screenshot({ path: 'logo.png' });

	// Take screenshot of full page (long page)
	await page.screenshot({ path: 'fullpage.png', fullPage: true });

    await page.close()
});