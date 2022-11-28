// @ts-check
const { test, expect } = require('@playwright/test');

test('click handling and demonstration', async ({ page }) => {
    await page.goto('https://www.apronus.com/music/lessons/unit01.htm');
    
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(1) > button')
    
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(3) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(5) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(1) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(1) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(3) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(5) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(1) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(5) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(6) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(8) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(5) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(6) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(8) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(8) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(10) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(8) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(6) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(5) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(1) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(8) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(10) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(8) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(6) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(5) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(1) > button');

  await page.close()
});
