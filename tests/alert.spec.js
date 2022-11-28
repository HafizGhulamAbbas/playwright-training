// @ts-check
const { test, expect } = require('@playwright/test');

test('select checkbox and radio ', async ({ page }) => {
    await page.goto('https://demoqa.com/alerts');

    // Use 'once' to only use the listener once
    // Accept dialog
    page.on('dialog', async dialog =>{
        console.log(dialog.message());
        await dialog.accept();
    });
    await page.click('#confirmButton');
    
    // Enter text and accept dialog
    page.on('dialog', async dialog =>{
        console.log(dialog.message());
        await dialog.accept('my text is this');
    });
    await page.click('#promtButton');

    await page.close()
});