// @ts-check
const { test, expect } = require('@playwright/test');

test('check the element state', async ({ page }) => {
    await page.goto('https://demoqa.com/automation-practice-form');

    const firstName = await page.$('#firstName')
    const sportsCheck = await page.$('#hobbies-checkbox-1')
    const submitBtn = await page.$('#submit')

    console.log(await firstName?.isDisabled())
    console.log(await firstName?.isEnabled())
    console.log(await firstName?.isEditable())
    console.log(await sportsCheck?.isChecked())
    console.log(await sportsCheck?.isVisible())
    console.log(await submitBtn?.isHidden())
    console.log(await submitBtn?.isVisible())

    await page.close()
});