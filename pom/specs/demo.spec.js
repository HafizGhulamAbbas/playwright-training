// @ts-check
const { test, expect } = require('@playwright/test');
const HomePage = require('../models/Home.page');
const LoginPage = require('../models/Login.page');

test.describe("AppliTools demo page", async ( ) => {

    let context = null;
    let page = null;
    let homePage  = null;
    let loginPage  = null;
    
    test.beforeAll(async ({browser}) => {
        context = await browser.newContext();
        page = await context.newPage();
        homePage = new HomePage(page);
        loginPage = new LoginPage(page);
        await loginPage.navigate();
    })

    test('Should be able to login', async() => {
        await loginPage.login('username','password');
        expect(await page.title()).not.toBeNull();
    })
 
    test('Should be logged in as Jack Gomez', async() => {
        expect(await homePage.getUserName()).toBe('Jack Gomez');
    })
 
    test('Should have total balance of $350',  async() => {
        expect(await homePage.getBalance('total')).toBe('$350');
    })
 
    test('Should have credit available of $17800',  async() => {
        expect(await homePage.getBalance('credit')).toBe('$17,800');
    })
 
    test('Should have due today of $180',  async() => {
        expect(await homePage.getBalance('due')).toBe('$180');
    })

    test.afterAll(async () => {
        await context.close();
        await page.close();
    })
})