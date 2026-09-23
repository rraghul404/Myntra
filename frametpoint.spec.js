import  {test} from "@playwright/test"
test ('Frame', async ({page}) =>{
await page.goto('https://www.tutorialspoint.com/selenium/practice/frames.php')
const frame1 = page.frameLocator('//iframe[@width="100%"]')
await frame1.getByText("Selenium - Automation Practice Form").click();
await page.waitForTimeout(5000)
const frame2 = page.frameLocator('//iframe[@width="30%"]')
await frame2.getByText("Selenium - Automation Practice Form").click();
await page.waitForTimeout(3000)

})