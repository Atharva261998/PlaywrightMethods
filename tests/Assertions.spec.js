const {test,expect,chromium}=require('@playwright/test')

test('assertions',async()=>{
   const browser= await chromium.launch();
   const context=await browser.newContext();
   const page1= await context.newPage();

   await page1.goto('https://www.nopcommerce.com/en/register')

   //toHaveURL for checking URL
//    await expect(page1).toHaveURL('https://www.nopcommerce.com/en/register')
//    //toHaveTitle for checking title
//     await expect(page1).toHaveTitle('Register - nopCommerce')
//     //element is visible or not
//     const logo=await page1.locator('.desktop-logo');
//     await expect(logo).toBeVisible();

//     //element is enables or disables
//     await expect(await page1.locator("input[id='FirstName']")).toBeEnabled();

//     //toBeChecked 
//     await page1.locator("//label[@for='Newsletter']").check();

//     // await expect("//label[@for='Newsletter']").toBeChecked();
//     const checkBox=await page1.locator("//label[@for='Newsletter']")
//     await expect(checkBox).toBeChecked();

//     //toHaveAttribute
//     const title=await page1.locator('.page-title')
//     await expect(title).toHaveAttribute('class','page-title');

    //toHaveText
    // const exactText= await page1.getByText('Username:')
    // await expect(exactText).toHaveText('Username:')
    // //toContainsText
    // const containText= await page1.getByText('Username:')
    // await expect(containText).toContainText('User')

    //toHaveValue() it will check the value present in input box or not

    const email=await page1.locator('#Email')
    await email.fill('athukulk@gmail.com')
    await expect(email).toHaveValue('athukulk@gmail.com')

    //toHaveCount it will check values in dropdown present 
    const allOPt=await page1.locator("select[id$='Details_CompanyIndustryId'] option")
    await expect(allOPt).toHaveCount(6)

})