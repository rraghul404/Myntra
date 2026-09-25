import {test} from '@playwright/test'
 test('Iphone 17',async({page})=>{
    await page.goto("https://www.amazon.in");
    await page.locator ('//input[@id="twotabsearchtextbox"]').fill('iphone 17');
    await page.locator ('//input[@id="nav-search-submit-button"]').click('Enter');
    const iphone = page.locator (`//span[@data-component-type="s-search-results"]/div/div[@role="listitem"]/a[@aria-label="4.6 out of 5 stars, rating details"]`)
                        .filter({ hasText: 'iPhone 17' }).allTextContents();

    console.log('iphone');

 })