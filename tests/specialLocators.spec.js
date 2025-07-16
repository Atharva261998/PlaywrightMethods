const {test,expect}=require('@playwright/test')

test('Bulit in locators',async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    //using special locators 
    //capture the logo and verify its visible
    const logo=await page.getByAltText('company-branding')
    await expect(logo).toBeVisible();

   
    //capture input box using get Byplaceholder
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    //click on login
    await page.getByRole('button',{type:'submit'}).click();
    //capture the text content
    const text= await page.locator("//p[@class='oxd-userdropdown-name']").textContent();
    await expect(page.getByText(text)).toBeVisible({timeout:20000});
    /**
     * getByAltText()
     * getByRole
     * getByPLaceholder
     * getByText()
     * getByLabel() :- this is for label attribute very rare
     * getByTitle() :- for title attribute
     * getByTestId():- specially data-testId attribute
     * 
     * / */




})