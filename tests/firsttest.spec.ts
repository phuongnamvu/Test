import { expect } from '@playwright/test';
import {test} from 'playwright/test'

test('The first test ',async({page,context})=>{
     
    
    await page.goto('https://www.google.com/?safe=active&ssui=on')

    await page.goto('https://www.google.com/');
    await page.getByLabel('Tìm kiếm', { exact: true }).click();
    await page.getByLabel('Tìm kiếm', { exact: true }).fill('Playwright');
    await page.keyboard.press('Enter');
    // Screen Shot 
    await page.screenshot({path: 'ScreenShot/Playwright-Website.png'})
    await page.getByRole('link', { name: 'Playwright: Fast and reliable end-to-end testing for modern ... Playwright https://playwright.dev' }).click();
    await page.getByRole('link', { name: 'Get started' }).click();
    // await page.locator('').first().click()


    // const context = await browser.newContext();
    const page1 = await context.newPage();
    await page1.goto('https://www.example.com');
    await page1.keyboard.down('Control');
    await page1.keyboard.press('KeyT');
    await page1.keyboard.up('Control');

    await page.waitForTimeout(2000);

    //  Đang Trang 2 nhé : Page 1
    await page1.getByRole('link', { name: 'More information...' }).click()
    // const nam = page.getByRole('heading', { name: 'Example Domain' })


    // Return Home Page : 
    await page.bringToFront();

    // await expect(page.locator('p').filter({ hasText: 'More information...' }).textContent()
    // await page.locator('p').filter({ hasText: 'More information...' }).click();
})

// test.describe('test suite 1',()=>{
//     test('the first test ',()=>{
        
//     })
//     test('the second test ',()=>{
        
//     })
//     test('the third test ',()=>{
        
//     })

// })