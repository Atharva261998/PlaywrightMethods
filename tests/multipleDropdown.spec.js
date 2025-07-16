const {test,expect,chromium}=require('@playwright/test')

test('dropdown',async()=>{
   const browser= await chromium.launch();
   const context=await browser.newContext();
   const page1= await context.newPage();

   //select multiple options from dropdown
    await page1.goto("https://testautomationpractice.blogspot.com/")
   await page1.locator('#colors').selectOption(['Red','Yellow','Blue'])

   //assertins
   const totalOptions=await page1.locator('#colors option')
   await expect(totalOptions).toHaveCount(7)

   //2
   const total= await page1.$$('#colors option')
    await expect(total.length).toBe(7)
   console.log(total.length)

    const content= await page1.locator('#colors').textContent();
    await expect(content.includes('Red')).toBeTruthy();    
})