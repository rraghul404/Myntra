import  {test} from "@playwright/test"
test ('Frame', async ({page}) =>{
await page.goto('https://www.globalsqa.com/demo-site/frames-and-windows/#iFrame')
const frame = page.frameLocator('[name="globalSqa"]')
await frame.getByText("JMeter Training").click();
await frame.getByText("Mobile Application Testing Training").click();
await page.waitForTimeout(5000)
await page.getByText("Sortable").click();
await page.waitForTimeout(3000)

})