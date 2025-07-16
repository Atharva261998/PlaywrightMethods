const {test,expect,chromium}=require('@playwright/test')

test('assertions',async()=>{
   const browser= await chromium.launch();
   const context=await browser.newContext();
   const page1= await context.newPage();

   await page1.goto('https://testautomationpractice.blogspot.com/')

   const table=await page1.locator('#productTable')
   console.log(await table.locator('tr th').count());

  const rows= await table.locator('tr');

  const matchRow= rows.filter({
    has: await page1.locator('td'),
    hasText:'Tablet'
  })

  await matchRow.locator('input').check();
  await page1.waitForTimeout(5000);

})