const {test,expect}=require("@playwright/test")
// const {test,expect}= require('@playwright/test')


test("open google",async({page})=>{
    await page.goto("https://rahulshettyacademy.com/angularpractice/",{waitUntil:'domcontentloaded'})
    await page.getByLabel("Check me out if you Love IceCreams!").check();
    await page.getByLabel("Gender").selectOption("Female");
    await page.getByLabel("Employed").check();
    await page.getByPlaceholder("Password").fill("Atharva@123")

    await page.getByRole("Button",{name:"Submit"}).click();
    await page.getByRole("link",{name:"Shop"}).click();
    await page.locator("app-card").filter({hasText:"Nokia Edge"}).getByRole("Button",{name:"Add"}).click();
    await page.pause();
})

test('Automate Client APP',async({page})=>{
    await page.goto("https://rahulshettyacademy.com/client/",{waitUntil:'domcontentloaded'})

    //Login
    await page.getByPlaceholder("email@example.com").fill("athukulk@gmail.com")
    await page.getByPlaceholder("enter your passsword").fill("Atharva@123")
    await page.getByRole('Button',{name:"Login"}).click();

    const loginPage=new loginPage(page);


    

    //give await 
    await page.waitForLoadState("networkidle");

    //Select the item and Add to cart
    await page.locator(".card-body").filter({hasText:"ZARA COAT 3"}).getByRole("button",{name:" Add To Cart"}).click();

    //waitfor
    
    await page.waitForLoadState("networkidle");

    //go to cart 
    await page.getByRole("listitem").getByRole("Button",{name:"Cart"}).click();

    //waitFor
    await page.waitForLoadState("networkidle");

    // await page.locator("[routerlink*=cart].items.even.ng-star-inserted").waitFor();

    // await expect.locator("div h3").last().isVisible();

    await page.getByRole("Button",{name:"Checkout"}).click();
    //.pressSequentially("ind")

    //dropdown on payment method
    await page.getByPlaceholder("Select Country").pressSequentially("ind");
    await page.getByRole("button",{name:"India"}).nth(1).click();
    // await page.waitForLoadState("networkidle");

    await page.getByText("PLACE ORDER").click();

})