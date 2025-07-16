const {test,expect}= require('@playwright/test')

test('locate single elements', async({page})=>{
    await page.goto("https://demoblaze.com/")

    await page.locator('#login2').click();//locate by property  
    // await page.waitForSelector("//input[@id='loginpassword']");
    // await page.waitForTimeout(3000);
    await page.locator("input[id='loginusername']").fill('Atharva@1998')   //by CSS
    await page.locator("//input[@id='loginpassword']").fill("Test@123") //By Xpath

    await page.locator("//div[@class='modal-footer']//button[@onclick='logIn()']").click();
    // await page.waitForLoadState('networkidle');

    //grab all the links and print
    const allLinks= await page.$$("a")

    // for(const link of allLinks){
    //     const all=await link.textContent();
    //     console.log(all)
    // }

    for(let i=0;i<allLinks.length;i++){
        const link= await allLinks[i].textContent();
        console.log(link)
    }


})

