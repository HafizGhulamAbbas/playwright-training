// @ts-check
const { test, expect } = require('@playwright/test');

test('using virtual keyboard type, delete text and retype', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/key_presses');

    await page.click('input');
    await page.keyboard.type('one does not simply exit vim');
    await page.keyboard.down('Shift');
    for (let i = 0; i < ' exit vim'.length; i++) {
        await page.keyboard.press('ArrowLeft');
    }
    await page.keyboard.up('Shift');
    await page.keyboard.press('Backspace');
    await page.keyboard.type(' walk into mordor');

    await page.close()
});