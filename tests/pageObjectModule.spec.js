const {test,expect}= require("@playwright/test")
const {LoginPage}=require('../pageObjectModule/loginPage')
const {DashboardPage}=require('../pageObjectModule/DashboardPage')
const {checkOut}=require("../pageObjectModule/checkOut")
const {paymentPage}=require('../pageObjectModule/paymentPage')


test('full automation',async({page})=>{


    //login 
    const userName="athukulk@gmail.com";
    const password="Atharva@123";
    const products = page.locator(".card-body")
    const productName = 'ZARA COAT 3';

    const loginPage=new LoginPage(page)

    // const loginPage= new LoginPage(page);

     await loginPage.goto()
     await loginPage.validCred(userName,password);


     //checked the product and added to cart and click on cart
    const dashboardPage= new DashboardPage(page);
    await dashboardPage.searchProduct(productName)
    await dashboardPage.clickOnCart();

   ;

   const CheckOut= new checkOut(page);
   await CheckOut.clickOnCheckoutButton();

   // assertionnis visible
//    const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
//    expect(bool).toBeTruthy();


    //payment method page

    const cardNumber= "123456783456";
    const Payment=new paymentPage(page)
    await Payment.fillTheForm(cardNumber);

    // const dropDown1="02";
    // const dropDown2="14";
   
    // await dropDown.selectOption("02")

    // const dropDownTwo= page.locator(".input.ddl").last();
    // await dropDownTwo.selectOption("14")

    // const email=await page.locator(".input.txt.text-validated.ng-pristine").textContent();
    // const visibleText= await page.locator("label").last();

    //dynamic dropdown
    const countryName=" India"
    await Payment.dynamicDropdown(countryName)

    await page.locator(".input.txt").nth(1).fill("016")
    await page.locator(".input.txt").nth(2).fill("Atharva Kulkarni")
    await Payment.clickOnPlaceOrder();
    await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");


    //order summary
    await page.locator("[routerlink*=myorders]").last().click();

    await page.waitForLoadState("networkidle")
    await page.locator(".ng-star-inserted").first().waitFor();

    // const tableBody= page.locator("tbody tr")

    // const lastCount= await tableBody.count();

    // for(let i=0;i<=lastCount;i++){
    //     if(await tableBody.locator("th").nth(i).textContent === "67fd5157fc76541aad2ee60e"){
    //        await tableBody.locator(".btn.btn-danger").nth(i).click();
    //         break;
    //     }
    // }
    // await page.pause();
    const rows = await page.locator("tbody tr");
 
 
   for (let i = 0; i < await rows.count(); ++i) {
    const orderId="67fd5870fc76541aad2ef391"
      const rowOrderId = await rows.nth(i).locator("th").textContent();
      if (orderId.includes(rowOrderId)) {
         await rows.nth(i).locator("button").first().click();
         break;
      }
   }
})