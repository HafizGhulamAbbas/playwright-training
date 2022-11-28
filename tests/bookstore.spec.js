// @ts-check
const { test, expect } = require('@playwright/test')

test.describe("UI tests for bookstore using playwright", () => {
    // Array to store element handles of the cells on the first row

    let context = null;
    let page = null;
    let firstRowCells = null;

    test.beforeAll(async ({browser}) => {
        context = await browser.newContext();
        page = await context.newPage();
        await page.goto('https://demoqa.com/books');
    })

    test(`Should load page`, async() =>{
        // Assertions
        expect(page).not.toBeNull();
        expect(await page.title()).not.toBeNull();
    });

    test(`Should be able to search for eloquent javascript`, async() =>{
        await page.fill('#searchBox','eloquent');
        // An assertion could go here
    });

    test(`Should check if book image is okay`, async() =>{
        // Array  element handle to store all cell element handles
        firstRowCells = await page.$$('.ReactTable  .rt-tr-group:nth-child(1) .rt-td');

        // Retrieving the element handle with img tag in the first element on the array
        let imgUrl = await firstRowCells[0].$('img');

        // Assertion
        expect(await imgUrl?.getAttribute('src')).not.toBeNull();
    });

    test(`Should check if title is okay`, async() =>{
        // Assertion
        expect(await firstRowCells[1].innerText()).toBe('Eloquent JavaScript, Second Edition');
    });

    test(`Should check if author is okay`, async() =>{
        // Assertion
        expect(await firstRowCells[2].innerText()).toBe('Marijn Haverbeke');
    });

    test(`Should check if publisher is okay`, async() =>{
        // Assertion
        expect(await firstRowCells[3].innerText()).toBe('No Starch Press');
    });

    test.afterAll(async () => {
        await page.close()
    })
})