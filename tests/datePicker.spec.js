const {test,expect,chromium}=require('@playwright/test')

test('dialog 0r normal alert handler',async()=>{
    const browser=await chromium.launch();
    const context=await browser.newContext();
    const page=await context.newPage();

    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.locator('#datepicker').click();

    //for date picker 
    const date= '4';
    const month='November';
    const year='2025';

    while(true)
    {
        const matchMonth= await page.locator("span[class='ui-datepicker-month']").textContent();
        const matchYear= await page.locator('.ui-datepicker-year').textContent();

        if(matchMonth === month && matchYear === year){
            break;
        }
        await page.locator('.ui-datepicker-next.ui-corner-all').click();

    }

    const dates=await page.$$('.ui-state-default')

    for(let dt of dates){
        const dat= await dt.textContent()
        if(dat==date){
            await dt.click();
            break;
        }
    }

    await page.waitForTimeout(5000);


    //one way is to provide direct date by using fill method //.ui-state-default
})