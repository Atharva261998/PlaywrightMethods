const {test,expect,chromium}=require('@playwright/test')

test('dropdown',async()=>{
   const browser= await chromium.launch();
   const context=await browser.newContext();
   const page1= await context.newPage();

   await page1.goto("https://testautomationpractice.blogspot.com/")


   //4 ways to select the values in dropdown 
   // label 
   // await page1.locator('#country').selectOption({label:'Canada'})
   // by visible text
   //    await page1.locator('#country').selectOption('India')
   await page1.waitForSelector('#country',{timeout: 50000})

   //by passing value attribute
   // await page1.locator('#country').selectOption({value:'germany'})

   // by susing index
   await page1.locator('#country').selectOption({index:1})

   //types of assertions e can apply on the dropdowns

   //1 no of opton present in dropdown ,toHaveCount - approach 1
      const countries= await page1.locator("select[id$='country'] option")
   await expect(countries).toHaveCount(10);
   //approah 2 in the array format
   //over here we captured all the options 
   // const options=await page1.$$('#country option')
   // console.log('no of options',options.length)

   // await expect(options.length).toBe(10)

   //perticular value is present or not
   //direct function in playwright
   //includes
   
   const content=await page1.$$('#country option');
   // await expect(content.includes('canada')).toBeFalsy();
  
   for(let option of content){
      const alldroOptions=await option.textContent();
      if(alldroOptions.includes("France")){
         console.log("country is available")
      }
   }
})