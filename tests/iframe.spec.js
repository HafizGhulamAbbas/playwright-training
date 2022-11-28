// @ts-check
const { test, expect } = require('@playwright/test');

test('select checkbox and radio ', async ({ page }) => {
  await page.goto('https://demoqa.com/frames');

  // logic to handle the iframe
  const frame1 = await page.frame({ url: /\/sample/ }); //regex
  // locating h1 element handle inside frame 
  const heading1 = await frame1?.$('h1');
  console.log(await heading1?.innerText());

  await page.close()
});