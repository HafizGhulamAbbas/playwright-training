// @ts-check
const { test, expect } = require('@playwright/test');

test('select checkbox and radio ', async ({ page }) => {
  await page.goto('https://www.w3schools.com/howto/howto_css_custom_checkbox.asp');

  const checks = await page.$$('#main div :nth-child(1) input[type="checkbox"]');
  // check the second checkbox
  await checks[1].check();
  // uncheck the first checkbox
  await checks[0].uncheck();
  //select the second radio button
  const radios = await page.$$('#main div :nth-child(1) input[type="radio"]');
  await radios[1].check();

  await page.close()
});
