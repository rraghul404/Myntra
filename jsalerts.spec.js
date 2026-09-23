import {test} from '@playwright/test'
 test('Handling JS alerts',async({page})=>{
    await page.goto("https://demoqa.com/alerts");
    page.on('dialog',(Dialog)=>{
        console.log(Dialog.message());
        console.log(Dialog.type());
        if(Dialog.type() == 'alert'){
            Dialog.accept();
        }
        else if(Dialog.type() == 'confirm'){
            Dialog.dismiss();
        }
        else{
            Dialog.accept('Raghul')
        }
        })
        await page.locator('#alertButton').click();
        await page.locator('#timerAlertButton').click();
        await page.locator('#confirmButton').click();
        await page.locator('#promtButton').click();
        await page.waitForTimeout(4000)
    })
