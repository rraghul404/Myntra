import { test } from '@playwright/test'

//.First task -- Total count of kids t-shirts

// test('T-shirts count',async({page})=>{
//     await page.goto("https://www.myntra.com/boy-tshirts")
//     const tshirts = page.locator('//li[@class="product-base"]');

//     const count = await tshirts.count();

//     console.log("Total Kids T-shirts:", count);


// .Second task -- Minimum price of kids t-shirts

test('Mininum price', async ({ page }) => {
    await page.goto("https://www.myntra.com/boy-tshirts")
    //     const totalPrice = page.locator('//li[@class="product-base"]/descendant::span[@class="product-discountedPrice"]')
    //     const discountPrice = await totalPrice.allTextContents()
    //     const price = discountPrice.map(priceValue=> Number(priceValue.replace(/[^0-9]/g, "")))
    //     const minimumPrice = Math.min(...price)
    //     console.log('Minimum Price', minimumPrice)

    // })
    // .Third task -- product name of minimum price

    //function to get minimumPrice

    //     const minimumPrice = await getMinimumPrice(page)
    //     console.log("Minimum Price", minimumPrice)

    //     //function to get productName

    //     const productName = await getProductName(page,minimumPrice)
    //     console.log("Product Name", productName)

    // })

    // funtion 1
    // async function getMinimumPrice(page) {
    //     const prices = await page.locator('//li[@class="product-base"]/descendant::span[@class="product-discountedPrice"]').allTextContents();

    //     const priceNumbers = prices.map(price => Number(price.replace(/[^0-9]/g, "")));

    //     const minimumPrice = Math.min(...priceNumbers);

    //     return minimumPrice

    // }

    // // async function getProductName(page, minimumPrice) {

    // //     const productName = await page.locator(`//li[@class="product-base"][.//span[@class="product-discountedPrice" and contains(.,'${minimumPrice}')]]//h3`).first().textContent();

    // //     return productName;
    // // }

    // async function getProductName(page) {

    //     const minimumPrice = await getMinimumPrice(page);

    //     const productName = await page.locator(
    //             `//li[@class="product-base"][.//span[@class="product-discountedPrice" and contains(.,'${minimumPrice}')]]//h3`).first() .textContent();

    //     return {minimumPrice,productName};
    // }
    // const result = await getProductName(page);

    // console.log("Minimum Price:", result.minimumPrice);
    // console.log("Product Name:", result.productName);


    // const productName = await getProductName(page);
    // console.log("Product Name:", productName);


    // Function 1
    // async function getMinimumPrice() {

    //     const prices = await page
    //         .locator('//li[@class="product-base"]/descendant::span[@class="product-discountedPrice"]')
    //         .allTextContents();
    //     const priceNumbers = prices.map(price =>
    //         Number(price.replace(/[^0-9]/g, ""))
    //     );
    //    const minimumPrice = Math.min(...priceNumbers);
    //    const productName= await getProductName(minimumPrice);
    //    console.log(productName);

    //     return minimumPrice;
    // }

    // // Function 2 calls Function 1
    // async function getProductName(minimumValue){

    //  const productName = await page
    //         .locator(
    //             `//li[@class="product-base"][.//span[@class="product-discountedPrice" and contains(.,'${minimumValue}')]]//h3`).first().textContent();

    //     return productName;
    // }
    // const minimumPrice=await getMinimumPrice();
    // console.log(minimumPrice);
    // })

    // overall price
    async function getMinimumPrice() {
        const prices = await page.locator(`//li[@class="product-base"]/descendant::div[@class="product-price"]/descendant::span[@class="product-discountedPrice"or(text() and not (@class))]`).allTextContents();
        const priceNumbers = prices.map(price =>
            Number(price.replace(/[^0-9]/g, "")));
        const minimumPrice = Math.min(...priceNumbers);
        const productName = await getProductName(page, minimumPrice);
        console.log(productName);
        return minimumPrice;

    }
    async function getProductName(page, minimumValue) {

        const productName = await page
            .locator(
                `//li[@class="product-base"]/descendant::div[@class="product-price"]/descendant::span[((@class="product-discountedPrice" and contains(.,'${minimumValue}')) or (contains(.,'${minimumValue}') and not(@class)))]/parent::div[@class="product-price"]/preceding-sibling::h3[@class="product-brand"]`
            ).first().textContent();


        return productName;
    }
    const minimumPrice = await getMinimumPrice();
    console.log(minimumPrice);
})