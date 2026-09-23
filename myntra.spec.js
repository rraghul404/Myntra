import {test} from '@playwright/test'

test ('xpath', async({page})=>{
  await page.goto('https://www.myntra.com/boy-tshirts');

  //all products

const all_products = page.locator('//div[@class="product-price"]//span[@class="product-discountedPrice"]')
const count = await all_products.count();
const all_prices = await all_products.allTextContents();
console.log('product count:',count)

});

//min value product
