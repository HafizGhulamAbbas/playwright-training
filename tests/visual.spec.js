// @ts-check
const { test, expect } = require('@playwright/test')

// required to use applitools API
// must have set up environmental variable APPLITOOLS_API_KEY
const { ClassicRunner, Eyes, Target, RectangleSize } = require('@applitools/eyes-playwright');

test.describe("UI tests for dynamic content using playwright and applitools", () => {
    // Array to store element handles of the cells on the first row

    let context = null;
    let page = null;
    const eyes = new Eyes(new ClassicRunner());  // visual testing eyes

    test.beforeAll(async ({browser}) => {
        context = await browser.newContext();
        page = await context.newPage();
        await page.goto('https://the-internet.herokuapp.com/dynamic_content');
    })

    test(`Should load page`, async() =>{
        await page.waitForSelector('h3', { state: 'attached' });
        // visual testing logic
        await eyes.open(page, 'The internet', 'Dynamic content', new RectangleSize(800, 600));
        await eyes.check(Target.window().fully());
        await eyes.close();
    });

    test.afterAll(async () => {
        await page.close()
    })
})