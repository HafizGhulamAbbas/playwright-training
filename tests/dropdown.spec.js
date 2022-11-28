// @ts-check
const { test, expect } = require('@playwright/test');

test('select an option from dropdown', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/dropdown');

  const dropdown = await page.$('#dropdown')

  // To select from dropdown, we can use value, label, or index
//   await dropdown?.selectOption({value: '1'})
//   await dropdown?.selectOption({label: 'Option 2'})
  await dropdown?.selectOption({index: 1})

  const availableOptions = await dropdown?.$$('option')

  for(let i = 0; i < availableOptions?.length ; i++) {
    console.log(await availableOptions[i].innerText())
  }

  await page.close()
});