const {test,expect,chromium}=require('@playwright/test')

test.skip('dialog 0r normal alert handler',async()=>{
    const browser=await chromium.launch();
    const context=await browser.newContext();
    const page=await context.newPage();

    await page.goto('https://testautomationpractice.blogspot.com/')

   
    //handeling the dialog 'alert'

    await  page.on('dialog', async(dialog)=>{
         expect(dialog.type()).toContain('alert')
         expect(dialog.message()).toContain('I am an alert box!')
                          await dialog.accept();

    })
        await page.getByRole('button',{name:'Simple Alert'}).click();
    await page.waitForTimeout(5000);
})

test.skip('confirmation alert handler',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.on('dialog',async(dialog)=>{
        await expect(dialog.type()).toContain('confirm');
        await expect(dialog.message()).toContain('Press a button!')
        // dialog.accept();
        dialog.dismiss();
    })

    await page.getByRole('button',{name:'Confirmation Alert'}).click();
    await expect(page.locator('#demo')).toHaveText('You pressed Cancel!')

    await page.waitForTimeout(3000)
})

test('validate prompt',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    
    await page.on('dialog',async(dialog)=>{
        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toContain('Please enter your name:');

        await dialog.accept('john');
    })

    await page.locator('#promptBtn').click();
    await expect(page.locator('#demo')).toHaveText('Hello john! How are you today?')

})