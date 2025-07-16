const {test,expect}=require('@playwright/test')
let page;
test.beforeAll(async({browser})=>{
     page=await browser.newPage();
    await page.goto('https://demoblaze.com/')
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('Atharva@1998');
    await page.locator('#loginpassword').fill('Test@123');
    await page.getByRole('button',{name:'Log in'}).click();

})


//validate the count
test('validate all elements',async()=>{
    const allProducts=await page.$$('.hrefch')
    await expect(allProducts).toHaveLength(9);
})

//add to cart one item
const prod='Nokia lumia 1520';
test('add to cart one item',async()=>{
    const products=await page.locator('.hrefch');
    const count=await products.count();

    for(let i=0;i<count;i++){
        const text=await products.nth(i).textContent();
        if(text.trim() === prod){
            await products.nth(i).click();
            break;
        }
    }
    // await page.waitForLocator('.btn.btn-success.btn-lg')
    await page.locator('.btn.btn-success.btn-lg').click();

    await page.on('dialog',async(dialog)=>{
        await expect(dialog.type()).toContain('alert');
        await expect(dialog.message()).toContain('Product added.')
        await dialog.accept()
    })
    test.afterAll(async()=>{
        await page.locator('#logout2').waitFor({ state: 'visible' });

    await page.locator('#logout2').click();
})
})