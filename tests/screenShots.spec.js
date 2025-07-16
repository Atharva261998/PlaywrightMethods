const {test,expect}=require('@playwright/test')

test('screenShot first',async({page})=>{
    await page.goto('https://www.facebook.com')
    await page.screenshot({path:'tests/screenShots/onlyLoginSS/'+Date.now()+'LoginPage.png',fullPage:true})
})
//fullPage Screen shot
test('screenShot Second',async({page})=>{
    await page.goto('https://www.facebook.com')
    await page.screenshot({path:'tests/screenShots/onlyLoginSS/'+Date.now()+'LoginPage.png',fullPage:true})
})

//perticular element screen shot
test.only('perticular screenshot',async({page})=>{

    await page.goto('https://www.facebook.com')
    await page.locator('._9vtf').screenshot({path:'tests/screenShots/onlyLoginSS'+ Date.now()+'input section.png'})

})