import {test} from '@playwright/test'

test ('open browser', async({page})=>{
    await page.goto('https://www.myntra.com/');
    
});