// @ts-check
const { test, expect } = require('@playwright/test');

test('type into the text field', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/forgot_password');

  const email = await page.$('#email')
  await email?.type('hgabbas1122@gmail.com')

  await page.close()
});
